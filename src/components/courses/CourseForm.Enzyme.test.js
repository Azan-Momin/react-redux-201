import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

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
  return shallow(<CourseForm {...props} />);
}

it("Renders form and hearder", () => {
  const wrapper = renderCourseForm();
  // console.log("using console log:\n", wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it("labels button text as 'Save' when not saving", () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find("button").text()).toEqual("Save");
});

it("labels button text as 'Saving...' when saving", () => {
  const wrapper = renderCourseForm({ saving: true });
  expect(wrapper.find("button").text()).toEqual("Saving...");
});
