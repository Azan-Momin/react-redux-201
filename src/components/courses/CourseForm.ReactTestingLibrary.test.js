import React from "react";
import CourseForm from "./CourseForm";
import { render } from "@testing-library/react";

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />); // uses render instead of shallow / mount
}

it("Should renders 'Add Course' header", () => {
  const { getByText } = renderCourseForm(); // destructuring query functions on the component
  getByText("Add Course");
});

it("Should label button text as 'Save' when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("Should label button text as 'Saving...' when saving", () => {
  const { getByText, debug } = renderCourseForm({ saving: true }); // destructuring debug function and calling it
  debug();
  getByText("Saving...");
});

// Notes:
// RTL - uses render function (instead of shallow and mount function that Enzyme uses)
// It always renders the dom
// No need to use expect function, just the testing query is enough
