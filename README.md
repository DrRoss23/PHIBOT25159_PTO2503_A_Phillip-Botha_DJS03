🎧 React Podcast Landing Page

A responsive, data-driven podcast discovery landing page built with React, featuring dynamic API fetching, reusable components, and polished UI design.

This project was developed for DJS03 and demonstrates key front-end skills including:

Data fetching with useEffect

State management with useState

Modular React architecture

Responsive design with CSS Grid

Clean, readable, well-documented code using JSDoc

src/
│
├── api/
│   └── podcastApi.js        # Fetch helper using Fetch API
│
├── components/
│   ├── PodcastCard.jsx       # Displays a single podcast preview
│   └── PodcastGrid.jsx       # Renders the responsive grid of cards
│
├── utils/
│   ├── dateUtils.js          # Formats last-updated date
│   └── genreUtils.js         # Maps genre IDs → readable genre names
│
├── App.jsx                   # Root component with data fetching + state
├── App.css                   # Full responsive styling
└── main.jsx                  # React root entry point

📡 Data Source

All podcast data comes from the official API:
https://podcast-api.netlify.app/
The app fetches the data on initial load using useEffect, stores it in state, and passes it into reusable components.

⭐ Features
🔄 Dynamic Data Fetching
Automatically retrieves a list of podcasts from an external API.
Loading state displayed while data is retrieved.
Friendly error message if the API fails.
Handles empty results gracefully.
🧱 Reusable Component Architecture
<PodcastGrid /> handles layout only.
<PodcastCard /> handles rendering a single card.
Following React best practices: UI = pure components, logic = App.jsx.


🏷️ Rich Podcast Preview Cards
Each card displays:
Cover image
Podcast title
Number of seasons
Human-readable genre tags
“Updated X days/months/years ago”
All formatting is handled by helper utilities for clean code.

📱 Fully Responsive Layout

CSS Grid with custom column breakpoints
1 column (mobile) → 2 → 3 → 4 → 5 columns on ultrawide desktops
Clean spacing, modern card design, hover effects


🧼 JSDoc Documentation

Every major function and component includes:
JSDoc parameters
return types
detailed descriptions
This ensures readability and makes the code easy to explain.


🧩 User Stories (DJS03 Rubric Mapping)
Code	Description	Status
P3.36	Fetch podcast data from an API	✅ Completed
P3.37	Display loading state	✅
P3.38	Show error state if fetch fails	✅
P3.39	Fetch using useEffect + store using useState	✅
P3.40	Display grid of podcast previews	✅
P3.41	Use reusable React components	✅
P3.42–P3.47	Display image, title, seasons, genres, last updated	✅
P3.48	Clean layout	✅
P3.49	Responsive grid	✅
P3.50	Consistent fonts, spacing, colour scheme	✅
P3.51	JSDoc documentation	✅
P3.52	Consistent code formatting	✅

🛠️ Technologies Used
React (Vite)
JavaScript (ES6+)
CSS Grid / Flexbox
Fetch API
JSDoc
Custom utility modules


🧪 How to Run Locally

# Clone the repo
git clone https://github.com/yourusername/djs03-react-podcast.git
# Go into the project
cd djs03-react-podcast
# Install dependencies
npm install
# Run development server
npm run dev

Then open:
👉 http://localhost:5173/


🖱️ How to Interact With the App

Visit the landing page
The app will automatically fetch all podcasts
You’ll first see:
Loading message
Then the full grid of podcast cards
Scroll through and explore:
Titles
Seasons
Genre tags
Last updated date
Resize the window to see the responsive grid adjust

This is a simple landing page the focus is on data rendering, component structure, and layout.


🧵 Code Quality Practices

Pure components: no side effects inside JSX components
Side effects (fetching) only in useEffect
All functions + components documented
Variables and functions named clearly and consistently
Utility functions separated from UI code
Minimal logic inside JSX for readability


📄 License

MIT License free to use, learn from, and extend.

Project by Phillip Botha