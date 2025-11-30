# 🎧 React Podcast Landing Page

_A responsive, data‑driven podcast discovery page built with React._

This project was created as part of **DJS03** and demonstrates key front‑end engineering concepts including API data fetching, modular UI components, state management, responsive layout design, and full JSDoc documentation.

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

This React application fetches real podcast data from an external API and displays it in a **dynamic, responsive grid layout**. Each podcast preview card includes:

- Cover image
- Podcast title
- Number of seasons
- Genre tags
- Human‑readable “Last updated” text

The goal of this project is to demonstrate real‑world React development patterns:

- Side‑effects handled via `useEffect`
- State management with `useState`
- Clean separation of data logic and UI logic
- Reusable, beginner‑friendly React components
- Fully documented functions using **JSDoc**

---

## ⭐ Features

### 🔄 Dynamic Data Fetching

- Automatically retrieves all podcasts from  
  `https://podcast-api.netlify.app/`
- Shows loading and error states
- Gracefully handles empty API results

### 🧱 Modular Component Architecture

- `<PodcastGrid />` — responsible for layout
- `<PodcastCard />` — responsible for individual podcast previews
- Pure components with no side effects

### 🏷️ Rich Podcast Preview Cards

Each card displays:

- Image
- Title
- Seasons
- Genre tags
- Updated date formatted as “X days/months/years ago”

Formatting logic is split into clean utility modules (`dateUtils.js`, `genreUtils.js`).

### 📱 Fully Responsive Layout

- CSS Grid with custom breakpoints
- **1 → 2 → 3 → 4 → 5 columns** depending on screen size
- Smooth hover effects and modern card styling
- Works beautifully on mobile, tablet, laptop, and ultrawide displays

### 🧼 Fully Documented Code (JSDoc)

Each major component and function includes:

- Parameter descriptions
- Return types
- Explanation of purpose and behaviour

---

## 📁 Project Structure

```
src/
│
├── api/
│   └── podcastApi.js        # Fetch helper using Fetch API
│
├── components/
│   ├── PodcastCard.jsx       # Displays a single podcast card
│   └── PodcastGrid.jsx       # Renders the grid layout
│
├── utils/
│   ├── dateUtils.js          # Formats last-updated text
│   └── genreUtils.js         # Converts genre IDs → titles
│
├── App.jsx                   # Root component with state + data fetching
├── App.css                   # Complete responsive styling
└── main.jsx                  # React entry file
```

This clean separation makes the project easy to read, extend, and maintain.

---

## 📡 Data Source

All data is fetched from the official Podcast API:  
➡️ **https://podcast-api.netlify.app/**

Fetched once on initial load using `useEffect()`, then passed downward via props.

---

## 🧩 User Stories (Rubric Mapping)

| Code            | Description                                 | Status |
| --------------- | ------------------------------------------- | ------ |
| **P3.36**       | Fetch podcast data from API                 | ✅     |
| **P3.37**       | Loading state                               | ✅     |
| **P3.38**       | Error state                                 | ✅     |
| **P3.39**       | useEffect + useState for fetching           | ✅     |
| **P3.40**       | Display grid of podcast previews            | ✅     |
| **P3.41**       | Reusable components                         | ✅     |
| **P3.42–P3.47** | Image, title, seasons, genres, last updated | ✅     |
| **P3.48**       | Clean layout                                | ✅     |
| **P3.49**       | Responsive grid                             | ✅     |
| **P3.50**       | Consistent fonts + spacing                  | ✅     |
| **P3.51**       | JSDoc documentation                         | ✅     |
| **P3.52**       | Code formatting                             | ✅     |

---

## 🛠️ Technologies Used

- React (Vite)
- JavaScript (ES6+)
- CSS Grid / Flexbox
- Fetch API
- JSDoc
- Utility helper modules

---

## 🧪 How to Run Locally

```bash
# Clone this repository
git clone https://github.com/yourusername/djs03-react-podcast.git

# Navigate into the folder
cd djs03-react-podcast

# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open:  
👉 http://localhost:5173/

---

## 🖱️ How to Interact With the App

1. Open the landing page
2. The app will automatically fetch all podcasts
3. You will see:
   - **Loading message**
   - Followed by the **dynamic grid** of podcast previews
4. Scroll to browse all podcasts
5. Resize the window to see the responsive grid change
6. Explore genres, seasons, and updated timestamps

This project focuses on **data rendering**, **component structure**, and **layout design**.

---

## 🧵 Code Quality Practices

- Pure components (no side effects in JSX)
- Side effects only inside `useEffect`
- Clear variable and function naming conventions
- Utility modules for any data formatting
- Minimal inline logic for readability
- Consistent JSDoc across all major functions and components

---

## 🌱 Future Improvements

Potential enhancements:

- Podcast search bar
- Genre filters or dropdowns
- Pagination or infinite scroll
- Detail page per podcast (React Router)
- Light/dark theme toggle

---

## 📄 License

MIT License — free to use, modify, and extend.

---

### 👤 Project by **Phillip Botha**
