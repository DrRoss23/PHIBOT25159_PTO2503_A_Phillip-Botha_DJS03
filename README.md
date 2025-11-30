# 🎧 React Podcast Landing Page

_A responsive, data‑driven podcast discovery page built with React._

This project was created for **DJS03** and demonstrates key front‑end engineering concepts:  
API data fetching, reusable component architecture, responsive design, state management, and full JSDoc documentation.

---

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Data Source](#data-source)
- [User Stories (Rubric Mapping)](#user-stories-rubric-mapping)
- [Technologies Used](#technologies-used)
- [How to Run Locally](#how-to-run-locally)
- [How to Interact With the App](#how-to-interact-with-the-app)
- [Code Quality Practices](#code-quality-practices)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## 📖 Overview

This React application fetches real podcast data from an external API and displays it inside a clean, modern, fully responsive grid layout.  
Each podcast preview card includes:

- Cover image
- Title
- Number of seasons
- Genre tags
- Human‑readable "Last updated" text

The project follows clean component architecture and separates concerns across utilities, API helpers, and UI components.

---

## ⭐ Features

- Fully responsive grid layout (1 → 5 columns)
- Covers, titles, seasons, genres, and updated timestamps
- Loading and error states with friendly feedback
- Reusable, beginner‑friendly React components
- JSDoc‑documented functions and components
- Clean styling with CSS Grid, Flexbox, and CSS variables

---

## 📁 Project Structure

```text
src/
  api/
    podcastApi.js
  components/
    PodcastCard.jsx
    PodcastGrid.jsx
  utils/
    dateUtils.js
    genreUtils.js
  App.jsx
  App.css
  main.jsx
```

**File Descriptions**

- **api/podcastApi.js** – Fetch helper using the Fetch API
- **components/PodcastCard.jsx** – Displays a single podcast preview card
- **components/PodcastGrid.jsx** – Renders the responsive grid layout
- **utils/dateUtils.js** – Formats ISO date strings into readable text
- **utils/genreUtils.js** – Maps genre IDs → human‑readable genre names
- **App.jsx** – Root component responsible for fetching + managing state
- **App.css** – Complete responsive styling for layout and cards
- **main.jsx** – React entry file that mounts the app

---

## 📡 Data Source

All podcast content is fetched from the official Podcast API:  
➡️ **https://podcast-api.netlify.app/**

The app uses `useEffect()` to fetch data once on initial load and stores it in state using `useState()`.

---

## 🧩 User Stories (Rubric Mapping)

| Rubric Code | Requirement Description                         | Status  |
| ----------- | ----------------------------------------------- | ------- |
| **P3.36**   | Fetch podcast data from external API            | ✅ Done |
| **P3.37**   | Display clear loading state                     | ✅ Done |
| **P3.38**   | Display error state if fetch fails              | ✅ Done |
| **P3.39**   | Use `useEffect` + `useState` for fetching logic | ✅ Done |
| **P3.40**   | Display grid of podcast previews                | ✅ Done |
| **P3.41**   | Use reusable React components                   | ✅ Done |
| **P3.42**   | Display cover image                             | ✅ Done |
| **P3.43**   | Display title                                   | ✅ Done |
| **P3.44**   | Display number of seasons                       | ✅ Done |
| **P3.45**   | Display genre tags                              | ✅ Done |
| **P3.46**   | Display human‑readable updated date             | ✅ Done |
| **P3.47**   | Combine all preview data into a unified card    | ✅ Done |
| **P3.48**   | Clean UI layout                                 | ✅ Done |
| **P3.49**   | Responsive design                               | ✅ Done |
| **P3.50**   | Consistent spacing, colours, typography         | ✅ Done |
| **P3.51**   | JSDoc documentation on major components         | ✅ Done |
| **P3.52**   | Clean, readable code formatting                 | ✅ Done |

---

## 🛠️ Technologies Used

- React (Vite)
- JavaScript (ES6+)
- CSS Grid & Flexbox
- Fetch API
- JSDoc documentation
- Utility helper modules

---

## 🧪 How to Run Locally

```bash
# Clone this repository
git clone https://github.com/yourusername/djs03-react-podcast.git

# Navigate into the project
cd djs03-react-podcast

# Install dependencies
npm install

# Start development server
npm run dev
```

Open in browser:  
👉 http://localhost:5173/

---

## 🖱️ How to Interact With the App

1. Open the landing page.
2. The app will automatically fetch all podcast data.
3. You’ll see:
   - A **loading message**, followed by
   - A **responsive grid** of podcast preview cards
4. Scroll through the list to browse all shows.
5. Resize the window to see the layout adapt (1 → 5 columns).
6. Each card shows title, image, seasons, genres, and last updated text.

This project focuses on **data rendering**, **component reuse**, and **responsive UI design**.

---

## 🧵 Code Quality Practices

- Pure functional components with no side effects
- Side effects handled only within `useEffect()`
- Clear variable and function naming conventions
- Utilities extracted for clarity and reuse
- Minimal inline logic inside JSX
- Full JSDoc documentation on major functions and components
- Consistent formatting across modules

---

## 🌱 Future Improvements

- Search functionality
- Genre filtering
- Individual podcast detail page (React Router)
- Light/dark mode toggle
- Pagination or infinite scrolling

---

## 📄 License

MIT License — free to use, modify, and extend.

---

### 👤 Created by **Phillip Botha**
