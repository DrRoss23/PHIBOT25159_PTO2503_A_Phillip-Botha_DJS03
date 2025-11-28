// src/utils/genreUtils.js

/**
 * Maps numeric genre IDs from the podcast API to human-readable titles.
 *
 * The IDs and names are taken from the official podcast API documentation.
 * Keeping the mapping in one place makes it easy to update in the future.
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
 * Converts an array of numeric genre IDs into an array of readable genre titles.
 *
 * Any IDs that are not recognised will be skipped. This keeps the UI clean
 * even if the API adds new genres we have not mapped yet.
 *
 * @param {number[]} genreIds - List of numeric genre IDs from the API.
 * @returns {string[]} Array of genre titles that can be shown to the user.
 */
export function getGenreTitlesFromIds(genreIds) {
  if (!Array.isArray(genreIds)) {
    return [];
  }

  return genreIds
    .map((id) => GENRE_TITLES[id])
    .filter(Boolean);
}
