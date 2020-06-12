import React from "react";
import { render } from "react-native-testing-library";
import { Home } from "./Home";

it("renders app view without error", () => {
  const { getAllByA11yLabel } = render(<Home />);

  const homeContainer = getAllByA11yLabel("homeContainer");

  expect(homeContainer.length).toBe(1);
});

it("renders sign in and register button", () => {
  const { getAllByA11yLabel } = render(<Home />);

  const signInButton = getAllByA11yLabel("signInButton");
  const signOutButton = getAllByA11yLabel("registerButton");

  expect(signInButton.length).toBe(1);
  expect(signOutButton.length).toBe(1);
});
