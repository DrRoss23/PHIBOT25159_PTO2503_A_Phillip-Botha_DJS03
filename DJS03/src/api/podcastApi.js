// src/api/podcastApi.js

const PODCAST_API_URL = "https://podcast-api.netlify.app/";

/**
 * Fetches podcast data from the external podcast API.
 *
 * This function is responsible for making a single HTTP GET request
 * to the podcast endpoint and converting the JSON response into a
 * JavaScript value.
 *
 * It throws a normal Error if something goes wrong so that the caller
 * (for example App.jsx) can decide how to handle the problem in the UI.
 *
 * @async
 * @returns {Promise<Array<object>>} A promise that resolves to an array
 *   of podcast objects returned by the API.
 * @throws {Error} If the network request fails or the response is not OK.
 */
export async function fetchPodcasts() {
  const response = await fetch(PODCAST_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch podcasts from the API.");
  }

  const data = await response.json();
  return data;
}
