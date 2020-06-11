import React from "react";
import { render } from "react-native-testing-library";
import App from "./App";

it("renders app view without error", () => {
  const { getAllByA11yLabel } = render(<App />);

  const viewElement = getAllByA11yLabel("viewElement");

  expect(viewElement.length).toBe(1);
});

it("renders correct text", () => {
  const { getAllByA11yLabel, getByText } = render(<App />);

  expect(
    getByText("Open up App.js to start working on your app!"),
  ).toBeTruthy();
});
