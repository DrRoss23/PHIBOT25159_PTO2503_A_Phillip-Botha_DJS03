// src/components/PodcastGrid.jsx
import PodcastCard from "./PodcastCard.jsx";

/**
 * Renders a responsive grid of podcast cards.
 *
 * This components job is to take an array of
 * podcast objects and display each one using <PodcastCard />.
 *
 * @param {Object} props - React props object.
 * @param {Array<object>} props.podcasts - List of podcast objects to render.
 * @returns {JSX.Element} A grid of PodcastCard components.
 */
function PodcastGrid({ podcasts }) {
  return (
    <section className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastCard
          key={podcast.id || podcast.title}
          podcast={podcast}
        />
      ))}
    </section>
  );
}

export default PodcastGrid;
