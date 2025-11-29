// src/utils/genreUtils.js

/**
 * Maps numeric genre IDs from the podcast API to human-readable titles.
 *
 * Keeping the mapping in one place makes it easy to update later if
 * the API adds or changes genres.
 *
 * @type {Record<number, string>}
 */
export const GENRE_TITLES = {
  1: "Personal Growth",
  2: "Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family",
};

/**
 * Converts an array of numeric genre IDs into readable genre titles.
 *
 * Any IDs that are not recognised in {@link GENRE_TITLES} are skipped.
 * This stops unknown IDs from showing as "undefined" in the UI.
 *
 * @param {number[]} genreIds - List of numeric genre IDs from the API.
 * @returns {string[]} Array of genre titles suitable for display.
 */
export function getGenreTitlesFromIds(genreIds) {
  if (!Array.isArray(genreIds)) {
    return [];
  }

  return genreIds
    .map((id) => GENRE_TITLES[id])
    .filter(Boolean);
}
