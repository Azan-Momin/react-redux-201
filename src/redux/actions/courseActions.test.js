import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

// describe...

describe("createCourseSuccess", () => {
  it("should create a CREATE_COURSE_SUCCESS action", () => {
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course,
    };
    // Action
    const action = courseActions.createCourseSuccess(course);
    // Assert
    expect(action).toEqual(expectedAction);
  });
});
