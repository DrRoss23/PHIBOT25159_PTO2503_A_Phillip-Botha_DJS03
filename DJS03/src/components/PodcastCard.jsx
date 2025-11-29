// src/components/PodcastCard.jsx
import { getGenreTitlesFromIds } from "../utils/genreUtils.js";
import { formatLastUpdated } from "../utils/dateUtils.js";

/**
 * @typedef {Object} Podcast
 * @property {number} id - Unique numeric identifier for the podcast.
 * @property {string} title - Title of the podcast show.
 * @property {string} image - URL for the podcast cover image.
 * @property {number} seasons - Number of seasons available.
 * @property {number[]} genres - List of numeric genre IDs for this show.
 * @property {string} updated - ISO date string for the last update.
 */

/**
 * Displays a detailed preview card for a single podcast.
 *
 * The card shows:
 * - Cover image
 * - Title
 * - Number of seasons
 * - Genre tags
 * - Last updated text
 *
 * It does not fetch any data by itself. All information is received
 * from the parent component via the `podcast` prop.
 *
 * @param {Object} props - React props object.
 * @param {Podcast} props.podcast - Podcast data to display.
 * @returns {JSX.Element} A styled podcast preview card.
 */
function PodcastCard({ podcast }) {
  const { title, image, seasons, genres, updated } = podcast;

  const seasonLabel = seasons === 1 ? "1 season" : `${seasons} seasons`;
  const genreTitles = getGenreTitlesFromIds(genres);
  const lastUpdatedText = formatLastUpdated(updated);

  return (
    <article className="podcast-card">
      <img
        className="podcast-card__image"
        src={image}
        alt={title}
        loading="lazy"
      />

      <div className="podcast-card__body">
        <h2 className="podcast-card__title">
          {title || "Untitled podcast"}
        </h2>

        <p className="podcast-card__seasons">{seasonLabel}</p>

        {genreTitles.length > 0 && (
          <ul className="podcast-card__genres">
            {genreTitles.map((genreTitle) => (
              <li
                key={genreTitle}
                className="podcast-card__genre-tag"
              >
                {genreTitle}
              </li>
            ))}
          </ul>
        )}

        <p className="podcast-card__updated">{lastUpdatedText}</p>
      </div>
    </article>
  );
}

export default PodcastCard;
