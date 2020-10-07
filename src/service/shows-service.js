import fetch from "isomorphic-fetch";

export function getShows(url) {
  return fetch(url).then((response) => response.json());
}
