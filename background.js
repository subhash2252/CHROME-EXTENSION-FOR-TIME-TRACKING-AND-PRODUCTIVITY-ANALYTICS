let activeTabId = null;
let activeDomain = null;
let lastActiveTime = Date.now();

const productiveSites = [
  "github.com",
  "stackoverflow.com",
  "docs.google.com",
  "medium.com"
];

const unproductiveSites = [
  "facebook.com",
  "twitter.com",
  "instagram.com",
  "reddit.com",
  "youtube.com"
];

let timeSpent = {};


function getDomain(url) {
  try {
    let urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch (e) {
    return null;
  }
}


function updateTimeSpent() {
  let now = Date.now();
  if (activeDomain) {
    let duration = now - lastActiveTime;
    if (!timeSpent[activeDomain]) {
      timeSpent[activeDomain] = 0;
    }
    timeSpent[activeDomain] += duration;
  }
  lastActiveTime = now;
}


chrome.tabs.onActivated.addListener(async (activeInfo) => {
  updateTimeSpent();
  activeTabId = activeInfo.tabId;
  let tab = await chrome.tabs.get(activeTabId);
  activeDomain = getDomain(tab.url);
});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === activeTabId && changeInfo.url) {
    updateTimeSpent();
    activeDomain = getDomain(changeInfo.url);
  }
});


chrome.windows.onFocusChanged.addListener(() => {
  updateTimeSpent();

  chrome.windows.getLastFocused({ populate: true }, (window) => {
    if (window.focused) {
      let activeTab = window.tabs.find(t => t.active);
      if (activeTab) {
        activeTabId = activeTab.id;
        activeDomain = getDomain(activeTab.url);
        lastActiveTime = Date.now();
      } else {
        activeDomain = null;
      }
    } else {
      activeDomain = null;
    }
  });
});


setInterval(() => {
  chrome.storage.local.set({ timeSpent });
}, 10 * 1000); 

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ timeSpent: {} });
});
