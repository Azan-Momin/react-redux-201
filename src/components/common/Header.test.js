import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

// shallow -
it("contains 3 navlinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toBe(3);
});

// MOUNT - Requires
it("contains 3 a tags via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;
  expect(numAnchors).toBe(3);
});

// Notes
// Enzyme uses shallow and mount functions for testing
// Here rendering a dom can be optional based on the function you use
// 1. Shallow: (Limited upto React component only)
// - doesn't create a dom
// - doesn't render children components
// 2. Mount: (Goes upto html that will be generated)
// - creates a dom
// - Render even the children components
