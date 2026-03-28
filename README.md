# React Frontend Intern Assignment - User Dashboard

A responsive React application that fetches users, displays them in a card-based dashboard, supports search, and includes a client-side "Create New User" flow with global state management.

## Features Implemented

- Dashboard page with API-based user list (`https://jsonplaceholder.typicode.com/users`)
- Card layout showing:
  - Name
  - Email
  - Phone
  - Company Name
- Search/filter by user name
- Create New User form (client-side only, stored in global context state)
- Global user management using React Context API
- User details page with React Router DOM (`/users/:userId`)
- Detailed view includes:
  - Core user fields
  - Address
  - Geo-location (lat/lng)
- Responsive UI using CSS Grid and Flex patterns

## Tech Stack

- React (functional components + hooks)
- React Router DOM
- Fetch API
- Plain CSS (responsive)
- Vite

## Project Structure

```txt
user-dashboard/
  src/
    components/
      UserCard.jsx
    context/
      UserContext.jsx
    pages/
      DashboardPage.jsx
      UserDetailsPage.jsx
    App.jsx
    main.jsx
    styles.css
  index.html
  package.json
  vite.config.js
```

## Setup Instructions

1. Ensure Node.js (v18+) and npm are installed.
2. Open terminal in project directory:
   ```bash
   cd user-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run development server:
   ```bash
   npm run dev
   ```
5. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Screenshots

Add screenshots in `assets/screenshots/` before submission and update the links below.

- Dashboard page: `assets/screenshots/dashboard.png`
- User details page: `assets/screenshots/user-details.png`
- Mobile responsive view: `assets/screenshots/mobile-view.png`

Example markdown usage:

```md
![Dashboard](assets/screenshots/dashboard.png)
![User Details](assets/screenshots/user-details.png)
![Mobile View](assets/screenshots/mobile-view.png)
```

## Notes

- New users are added only in client memory and are not persisted to backend.
- If the page is refreshed, newly added users are cleared (expected for this assignment).

## Suggested Commit Plan

Use this sequence for a clean and readable history:

1. `chore: initialize Vite React project structure`
2. `feat: implement global user context and dashboard user fetch`
3. `feat: add search and client-side create user form`
4. `feat: add user details route with address and geo display`
5. `style: implement responsive card and form layout`
6. `docs: add setup guide and screenshots section`
