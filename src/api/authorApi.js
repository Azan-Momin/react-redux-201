import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.API_URL + "/authors/";
const baseUrl = "https://bzefp6-3001.csb.app/authors/"; // Hard-coded for code-sandbox

export function getAuthors() {
  console.log("Hard-coded the base-url in this file");
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
