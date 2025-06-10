# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

# API-INTEGRATION

*COMPANY*    :     CODETECH IT SOLUTIONS

*NAME*       :     VADDI SUBHASH

*INTERN ID*  :     CT04DF2292

*DOMAIN*     :     FULL STACK WEB DEVELOPMENT

*DURATION*   :     4 WEEKS

*MENTOR*     :     NEELA SANTOSH

**DESCRIPTION**    : 

The Chrome Extension for Time Tracking and Productivity Analytics is a browser-based tool designed to help users monitor and improve their online habits by tracking time spent on various websites and providing insightful productivity analytics. The core goal of this project is to develop a lightweight, user-friendly Chrome extension that runs in the background, automatically logging time spent on each active tab and classifying sites as either productive or unproductive. By collecting this data and syncing it with a backend, the extension can generate weekly reports and visual dashboards that help users understand and optimize their digital behavior.

At the heart of the extension is a background script that listens for tab and window events using the Chrome Extension APIs. It detects when a user switches tabs, navigates to a new site, or becomes inactive, and it logs time intervals accordingly. The extension keeps track of URLs and matches them against a predefined list of website categories—productive sites like coding platforms, learning tools, and documentation pages are flagged as beneficial, while social media, streaming services, and entertainment sites are considered unproductive. Users may also have the ability to customize which sites fall into each category, allowing for a more personalized tracking experience.

The frontend of the extension consists of a popup interface and an analytics dashboard. The popup is a compact UI accessible from the Chrome toolbar, displaying quick stats such as today’s total time, most visited sites, and a productivity percentage. The full dashboard, which may be hosted as a separate web page or embedded in the extension, offers more detailed analytics. This includes graphs showing daily and weekly time usage, pie charts for site categories, and productivity trends over time. React.js or Vue.js can be used to create a responsive and interactive dashboard, ensuring a smooth and modern user experience across devices.

On the backend, the extension connects to a server developed with Node.js, Flask, or Django. This server handles the storage and processing of user data, including site visit logs, productivity scores, and user preferences. A secure database such as MongoDB or PostgreSQL stores this information, enabling users to access historical data and generate reports even after browser restarts or across multiple devices. Authentication features can be added to allow individual user accounts, enabling syncing and personalized analytics.

The system respects user privacy by asking for consent and clearly explaining what data is being tracked. Time tracking only begins when the user opts in, and no sensitive information (such as page contents or passwords) is recorded—only domain-level data is stored for analytics purposes.

In summary, the Chrome Extension for Time Tracking and Productivity Analytics is a powerful yet user-friendly tool that promotes better digital habits. By combining real-time browser activity tracking, intelligent website categorization, and a backend for data storage and reporting, it empowers users to take control of their time online. This project is ideal for professionals, students, or anyone seeking to enhance productivity and minimize time spent on distractions, ultimately leading to more intentional and effective use of web resources.

**OUTPUT**    :

![Image](https://github.com/user-attachments/assets/0ca9ade3-e1b8-4dc4-b356-9907944d5944)
