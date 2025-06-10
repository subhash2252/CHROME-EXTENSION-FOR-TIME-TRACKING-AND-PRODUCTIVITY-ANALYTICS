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

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor(duration / (1000 * 60 * 60));

  return `${hours}h ${minutes}m ${seconds}s`;
}

function classify(domain) {
  if (productiveSites.includes(domain)) return 'productive';
  if (unproductiveSites.includes(domain)) return 'unproductive';
  return 'neutral';
}

chrome.storage.local.get(['timeSpent'], (result) => {
  let timeSpent = result.timeSpent || {};
  let summaryDiv = document.getElementById('summary');

  if (Object.keys(timeSpent).length === 0) {
    summaryDiv.innerText = "No data tracked yet.";
    return;
  }

  let html = "<ul>";
  for (let domain in timeSpent) {
    let cls = classify(domain);
    html += `<li class="${cls}">${domain}: ${msToTime(timeSpent[domain])}</li>`;
  }
  html += "</ul>";

  summaryDiv.innerHTML = html;
});
