// src/utils/dateUtils.js

/**
 * Formats an ISO date string from the API into a simple
 * "Updated X days/months/years ago" style message.
 * This function calculates the difference between the
 * current date and the provided date to generate a relative time string.
 *
 * @param {string} isoDateString - Date string from the API (e.g. "2022-11-03T07:00:00.000Z").
 * @returns {string} Human-readable text describing how long ago the show was updated.
 */
export function formatLastUpdated(isoDateString) {
  if (!isoDateString) {
    return "Updated date unknown";
  }

  const updatedDate = new Date(isoDateString);
  const now = new Date();

  const diffMs = now - updatedDate;
  const oneDayMs = 1000 * 60 * 60 * 24;

  const days = Math.floor(diffMs / oneDayMs);

  if (Number.isNaN(days) || days < 0) {
    return "Updated date unknown";
  }

  if (days === 0) {
    return "Updated today";
  }

  if (days === 1) {
    return "Updated 1 day ago";
  }

  if (days < 30) {
    return `Updated ${days} days ago`;
  }

  const months = Math.floor(days / 30);

  if (months === 1) {
    return "Updated 1 month ago";
  }

  if (months < 12) {
    return `Updated ${months} months ago`;
  }

  const years = Math.floor(days / 365);

  if (years === 1) {
    return "Updated 1 year ago";
  }

  return `Updated ${years} years ago`;
}
