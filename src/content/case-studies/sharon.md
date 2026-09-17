---
title: 'Sharon: Building, Running, and Sunsetting a Web App'
description: 'How I built a task-automation tool and what the project taught me as a technical writer.'
date: 2026-09-16
---

Sharon is a tool I built to automate a tedious task. It started in 2023 as a Chrome extension. In 2026 I rebuilt it twice, first as a Python script and then as a multi-tenant web app that I developed with Claude Code. I ran a beta with a real user, and eventually decided to sunset the web app. 

This is the story of what I built, the challenges I worked through, and what I learned.

## The Problem

In 2023, I started selling clothes I no longer wear on an online marketplace called [Poshmark](https://poshmark.com/). Overall, Poshmark is an easy platform to use, but there is one major drawback: the algorithm heavily favors listings that are recently "shared"…but you can only **manually** share those items. I'm guessing this is an intentional point of friction, designed to keep you in the Poshmark app as much as possible. 

Sharing a listing means you go to your page, click "Share" for that item, click another button to confirm the action, and then do the same for the next listing. And then next. And then you start all over again. 

I had about 30 listings in my peak reselling era, but even that is 60 clicks for just one round of sharing. And if you weren't sharing constantly, your listings would get buried in the virtual clothing heap.

## My First Approach: Chrome Extension in 2023
Constantly resharing was not an option for me—who has the time for that?! I figured I could automate this task. So I did.

I wasn't the first one with this idea: there were already some automation tools, but you had to pay for them. Some Poshmarkers are full-time resellers, so investing in a monthly subscription to automate their process was worth it and could be a write-off. But I only list an item here and there, so I'd most likely lose money on a subscription. 

Plus, these tools were only available as Chrome extensions, and in order to run a Chrome extension, you have to keep your computer on. But this was an interesting idea…I was already on my computer all day for my actual job as a tech writer. I poked around the [Google Chrome extensions](https://developer.chrome.com/docs/extensions/get-started) docs and discovered that they offered templates. So I created a GitHub repo based on one of those templates. I poked around [Stack Overflow](https://stackoverflow.com/), [Reddit](https://www.reddit.com), and [W3Schools](https://www.w3schools.com) (this was 2023, still the early days of ChatGPT and Claude being publicly available, so I didn't use them as coding partners). I managed to cobble together a Chrome extension I dubbed **Sharon**, named because she **keeps sharin'** so you don't have to. 

Was it the most elegant code you've ever seen? No. But it worked, and as someone who isn't a developer, getting code to the Minimum Viable Product (MVP) stage was exhilarating. I was able to do my tech writing work while Sharon shared in the background.

I publicly shared the extension's code in [GitHub](https://github.com/biancawriter/sharon), published the app in the [Chrome Web Store](https://chromewebstore.google.com) (I have since taken it down), and even created a [video tutorial](https://youtu.be/FQCCf1sM-a4?si=3NTSIURduL-P5WqK) for end users. 

## My Second Approach: Python Script
The Sharon Chrome extension worked beautifully for me…until it didn't. In early 2026, Poshmark changed their user interface in a way that broke Sharon's logic. I like a good challenge, and by now I was regularly using Claude Code at work. I figured that instead of just updating the code, I could take the project one step further: automate sharing **without** relying on a Chrome extension.

I started from scratch; this was a whole new approach so none of the Chrome extension code would be relevant. I did some research, provided Claude Code with detailed prompts, iterated on the output, and came up with a Python script. When I ran the script from my computer, it shared my Poshmark listings. Yes, my computer still needed to be on, but I was no longer dependent on a browser. Eureka!

## My Third Approach: Web App
The Python script was the proof-of-concept I needed to take the next step: **create a web app version of Sharon**. And maybe I could even monetize it? This was significantly more challenging than previous iterations: I would need multiple components that would integrate, I didn't know what those components would be, and I'd never created a web app before. But there was also a time when I hadn't developed a browser extension or Python script, and I had managed to pull those off. 

I did a SWOT analysis. The existing sharing tools were all browser extensions, and none of them ran in the cloud, so I figured I could also pursue the monetization aspect of it.

I got to work. I established my MVP criteria, and used Claude as a research buddy to evaluate what types of tools I'd need, what pricing made sense, and how the logic would work. We came up with an implementation timeline that broke down the development process into specific steps to build the MVP.

There was a lot of iteration, trial and error, but I finally got it all to work! These are the core components of the Sharon web app:

| Component | What it did | Why I chose it |
|---|---|---|
| **Next.js** (frontend) | The dashboard: sign in, configure settings, start and stop sharing, view history. | Well supported by Railway and Supabase, and I wanted to learn it. |
| **FastAPI** (backend, Python) | The API and the sharing logic. | Python let me reuse the proof-of-concept script almost as-is. |
| **PostgreSQL** | Users, encrypted cookies, settings, activity history, and the job queue. | One database for everything. |
| **APScheduler** | Ran each user's sharing job in the background and survived restarts. | Free and simple. |
| **Supabase Auth** | Sign up, log in, password reset. | Free tier. The backend verified tokens against Supabase's public keys, so no secret was shared. |
| **Stripe** | Managed subscriptions and free trials, plus hosted checkout and a billing portal. | Handled cards, invoices, and cancellations so I did not build a billing UI. |
| **Resend** | Sent transactional emails: welcome, trial reminders, and alerts when sharing stopped. | Free tier and a simple API. It also sent the auth emails, so every message came from one domain. |
| **Fernet** (encryption) | Encrypted each user's Poshmark cookies before storing them. | Storing someone else's login credentials in plain text was not an option. |
| **Railway** | Hosted the frontend, backend, and database as one project. | One bill, one dashboard, deploys from GitHub. Low cost. |

I had created a web app that a user could log in to, configure their Poshmark share settings, start the share process, and most importantly: turn off their computer and let the app keep sharing their listings. 

My hands grasped the holy grail.  

## Beta Testing & Deciding to Sunset the Project
And eventually I decided to let go of that cup and move forward.

Leading up to that point, I shared the Sharon web app with the world! I created a [video tutorial](https://youtu.be/KENdeZS06RI?si=VrnNlqoAJSnrXqhx) and sought beta testers on Instagram. It turns out the marketing part was harder than I thought. Even if you're offering something for free, that siren song doesn't replace credibility and earned trust. I got one beta tester, a really helpful one at that: she was a full-time reseller, and had workflows that I, as a hobbyist, hadn't anticipated. She suggested several quality-of-life improvements, and I implemented them. Then her testing surfaced a much bigger issue.

Her closet had 800 active listings, far more than my measly dozen or so. After she ran Sharon for long periods of time, Poshmark started blocking her activity. Claude and I researched the issue, and discovered that Poshmark uses fraud-scoring and device-fingerprinting services to detect automation. A real browser session sends about 55 cookies and 18 headers from a home IP address. Sharon sent 2 cookies and 6 headers from a cloud server. Poshmark could tell the difference. I added longer delays and more randomized timing, but the block was about identity, not speed, so no amount of pacing could fix it.

I researched what I could do to fix this. I realized that I would need to restructure the app completely and shoulder higher costs, with little chance that a new approach would work.

So although I had invested time (and a little money) into my efforts, I made the decision to sunset the app. It was disappointing, but I prefer to root my decisions in facts instead of just hoping it all works out.

I also archived the project in true tech writer style: with a checklist and documentation. I closed every paid service, deleted every stored credential, and created these files to capture key info:

- **Project debrief:** Records what I built, how it worked, and why it ended.
- **Shutdown checklist:** Maps out each step and how to verify its completion.
- **Templates and guidance:** If I decide to build another app, I have a foundation to build on.


## What This Means for My Work as a Technical Writer
Building Sharon made me a writer who has been the reader and the builder. Here is what that changes about the work I can do on a documentation team.

- **I can read a codebase and find the answer myself.** When I document an API, I can trace a request from the endpoint to the database and write from what the code does, not from what someone remembers it doing.
- **I can run the product and reproduce a bug.** I found issues in my own app by reading logs and noticing when something did not work, then traced each one to its cause. When I write a troubleshooting article now, it comes from having seen the problem myself, not from a description of it.
- **I know what developers need from docs, because I was one.** Railway, Supabase, Stripe, and Resend were all new to me. I set each one up from its documentation, often through their MCPs and Claude Code, and I noticed which docs got me to a working result and which ones sent me to the source code. Clear structure, explicit prerequisites, and copy-ready examples matter more than ever.
- **I can effectively direct AI tools.** The best results from Claude came when I gave it the goal, the constraints, and a clear definition of done, then asked it to lay out the tradeoffs before I chose. That is the same discipline good documentation requires.

That perspective comes with me to every team I write for.
