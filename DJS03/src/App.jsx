// src/App.jsx
import { useEffect, useState } from "react";
import { fetchPodcasts } from "./api/podcastApi";
import PodcastGrid from "./components/PodcastGrid.jsx";
import "./App.css";

/**
 * Root component for the React Podcast Landing Page.
 *
 * Responsible for:
 * - Fetching podcast data on initial load.
 * - Managing loading, error, and podcast list state.
 * - Passing the podcast list into child components for rendering.
 *
 * @returns {JSX.Element} The JSX markup for the app.
 */
function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPodcasts() {
      try {
        setIsLoading(true);
        setError("");

        const data = await fetchPodcasts();

        if (!data || (Array.isArray(data) && data.length === 0)) {
          setPodcasts([]);
        } else {
          setPodcasts(data);
        }
      } catch (err) {
        setError("Sorry, we could not load podcasts. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    loadPodcasts();
  }, []);

  if (isLoading) {
    return <p>Loading podcasts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!podcasts || podcasts.length === 0) {
    return <p>No podcasts found.</p>;
  }

  return (
    <main className="app">
      <header className="app__header">
        <h1 className="app__title">React Podcast Landing Page</h1>
        <p className="app__subtitle">
          Total podcasts loaded: {podcasts.length}
        </p>
      </header>

      {/* Phase 2: use a dedicated component to render the grid */}
      <PodcastGrid podcasts={podcasts} />
    </main>
  );
}

export default App;
