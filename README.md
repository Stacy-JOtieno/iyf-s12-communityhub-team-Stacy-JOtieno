# CommunityHub

A collaborative community platform built with **React, Vite and JavaScript** as part of the IYF Weekend Academy Season 12.

## Team

| Role | Member | GitHub |
|---|---|---|
| Team Lead | Stacy J Otieno | [@Stacy-JOtieno](https://github.com/Stacy-JOtieno) |
| Member | Carlos Adenge | [@carlosadenge](https://github.com/carlosadenge) |
| Member | Stephen Muchemi | [@stephenmuchemi091-dot](https://github.com/stephenmuchemi091-dot) |
| Member | Belinda May | [@Belinda-May](https://github.com/Belinda-May) |
| Member | Josphine Moraa | [@JosphineMoraa](https://github.com/JosphineMoraa) |
| Member | Antony Shisia | [@antonyshisia](https://github.com/antonyshisia) |

## About

CommunityHub is a platform for community members to explore and interact with posts.

### Features

- Home, Posts, Post Detail, Create Post and About pages.
- Community post browsing and category filtering.
- Post search.
- Post creation.
- Individual post views.
- Like interactions.
- Loading and error states for data fetching.
- Responsive styling.

## Tech Stack

- **Frontend:** React
- **Build Tool:** Vite
- **Routing:** React Router
- **Styling:** CSS
- **Testing:** Vitest 
- **Version Control:** Git and GitHub

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Stacy-JOtieno/iyf-s12-communityhub-team-Stacy-JOtieno.git
```

Navigate into the frontend directory:

```bash
cd iyf-s12-communityhub-team-Stacy-JOtieno/frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Testing

Run the frontend tests using:

```bash
npm test
```

## Accessibility

### Lighthouse Accessibility Audit

| Audit | Device | Accessibility Score |
|---|---|---:|
| Baseline audit | Desktop | 96% |

The desktop baseline was recorded using Chrome Lighthouse. Further audits can be documented here as accessibility improvements are made.

## Contribution Guidelines

# Start the development server
npm run dev
```

## Week 9 accessibility audit

Antony Shisia ran Chrome Lighthouse on the production preview of the CommunityHub frontend (`npm run build`, then `npm run preview` at http://127.0.0.1:4173). Only the Accessibility category was scored.

| Run | Score | What Lighthouse reported |
| --- | --- | --- |
| Before the task 18.4 fixes | 93 | Post metadata contrast was 3.99:1 (`#777f95` on `#ffffff`; 4.5:1 required). The sidebar heading jumped from `h1` to `h3`. |
| After the task 18.4 fixes | 100 | Those two audits passed. |

Fixes in this change:

- Post metadata and footer text use `#3e465c` on white so the contrast clears AA.
- The sidebar heading is an `h2`, so the heading order follows the page `h1`.
- The search field has a visible label, not only an accessible name.
- Header and sidebar links point at real sections (`#main`, `#feed`, `#about`) instead of `href="#"`.
- A skip link and `:focus-visible` outlines keep keyboard use visible.
- The document title is CommunityHub.

The routed multi-page app is on the Week 9 mini-project branch. This score is for the shared frontend shell that this branch changes.
