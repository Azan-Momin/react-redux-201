import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.API_URL + "/courses/";
const baseUrl = "https://bzefp6-3001.csb.app/courses/"; // Hard-coded for code-sandbox

export function getCourses() {
  console.log("Hard-coded the base-url in this file");
  console.log("In getCourses()");
  console.log("baseUrl: " + baseUrl);
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveCourse(course) {
  console.log("Hard-coded the base-url in this file");
  console.log("baseUrl: " + baseUrl + "\ncourse.id: " + course.id);
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(course),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  console.log("Hard-coded the base-url in this file");
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
