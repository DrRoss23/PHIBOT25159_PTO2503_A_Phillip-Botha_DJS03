// src/App.jsx
import { useEffect, useState } from "react";
import { fetchPodcasts } from "./api/podcastApi";
import PodcastGrid from "./components/PodcastGrid.jsx";
import "./App.css";

/**
 * Root component for the React Podcast Landing Page.
 *
 * Responsibilities:
 * - Fetch podcast data from the external API when the app first loads.
 * - Manage loading, error, and podcast list state with useState.
 * - Decide what to render for loading/error/empty states.
 * - Pass the final podcast list into child components for display.
 *
 * This component does not contain any layout-specific CSS logic;
 * styling is handled in App.css.
 *
 * @returns {JSX.Element} The complete app layout.
 */
function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    /**
     * Loads podcast data from the API and updates component state.
     *
     * This inner function exists because useEffect itself cannot be
     * declared async. It performs three main tasks:
     * - Sets loading state to true
     * - Calls fetchPodcasts()
     * - Handles success and error outcomes
     *
     * @async
     * @returns {Promise<void>}
     */
    async function loadPodcasts() {
      try {
        setIsLoading(true);
        setError("");

        const data = await fetchPodcasts();

        if (Array.isArray(data)) {
          setPodcasts(data);
        } else {
          setPodcasts([]);
        }
      } catch (err) {
        setError("Sorry, we could not load podcasts. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    // Run once when the component is first mounted.
    loadPodcasts();
  }, []);

  // ----- Loading / error / empty states -------------------------------

  if (isLoading)
    return <p className="status-message">Loading podcasts...</p>;

  if (error) return <p className="status-message">{error}</p>;

  if (podcasts.length === 0)
    return <p className="status-message">No podcasts found.</p>;

  // ----- Main app content ---------------------------------------------

  return (
    <main className="app">
      <div className="app__inner">
        <header className="app__header">
          <h1 className="app__title">React Podcast Landing Page</h1>
          <p className="app__subtitle">
            Total podcasts loaded: {podcasts.length}
          </p>
        </header>

        <PodcastGrid podcasts={podcasts} />
      </div>
    </main>
  );
}

export default App;
