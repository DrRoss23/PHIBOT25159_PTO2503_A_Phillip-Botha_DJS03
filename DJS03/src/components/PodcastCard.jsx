// src/components/PodcastCard.jsx
import { getGenreTitlesFromIds } from "../utils/genreUtils.js";
import { formatLastUpdated } from "../utils/dateUtils.js";

/**
 * Displays a detailed preview of a single podcast.
 *
 * This card shows:
 * - The podcast cover image
 * - The podcast title
 * - Number of seasons
 * - Genre titles
 * - Last updated date in a human-readable format
 *
 * It receives a full podcast object from the API via props and
 * uses simple helper functions to convert genre IDs and dates
 * into text that is easy for users to understand.
 *
 * @param {Object} props - React props object.
 * @param {Object} props.podcast - The podcast data to display.
 * @param {string} props.podcast.title - Title of the podcast.
 * @param {string} props.podcast.image - URL to the podcast cover image.
 * @param {number} props.podcast.seasons - Number of seasons available.
 * @param {number[]} props.podcast.genres - List of numeric genre IDs.
 * @param {string} props.podcast.updated - ISO date string of last update.
 * @returns {JSX.Element} A detailed podcast preview card.
 */
function PodcastCard({ podcast }) {
  const {
    title,
    image,
    seasons,
    genres,
    updated,
  } = podcast;

  const seasonLabel =
    seasons === 1 ? "1 season" : `${seasons} seasons`;

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

        <p className="podcast-card__seasons">
          {seasonLabel}
        </p>

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

        <p className="podcast-card__updated">
          {lastUpdatedText}
        </p>
      </div>
    </article>
  );
}

export default PodcastCard;
