import { useEffect, useState } from "react";
import { fetchPodcasts } from "./api/podcastApi";
import PodcastGrid from "./components/PodcastGrid.jsx";
import "./App.css";

/**
 * Root component for the React Podcast Landing Page.
 *
 * Handles:
 * - Fetching podcast data from the external API.
 * - Managing loading, error, and podcast state.
 * - Passing podcast data to child components.
 *
 * @returns {JSX.Element} The full app layout.
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

    loadPodcasts();
  }, []);

  /* Loading / Error / Empty States ------------------------------------ */
  if (isLoading)
    return <p className="status-message">Loading podcasts...</p>;

  if (error) return <p className="status-message">{error}</p>;

  if (podcasts.length === 0)
    return <p className="status-message">No podcasts found.</p>;

  /* Main App ----------------------------------------------------------- */

  return (
    <main className="app">
      <div className="app__inner">
        <header className="app__header">
          <h1 className="app__title">React Podcast Landing Page</h1>
          <p className="app__subtitle">
            Total podcasts loaded: {podcasts.length}
          </p>
        </header>

        {/* Podcast Grid */}
        <PodcastGrid podcasts={podcasts} />
      </div>
    </main>
  );
}

export default App;
