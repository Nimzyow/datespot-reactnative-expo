import React from "react";
import { fireEvent, render } from "react-native-testing-library";

import { Authentication } from "./Authentication";
import { registerUser } from "../../actions/auth";
import { loginForm } from "../../Utilities/FormFarm";

describe("Authentication", () => {
  it("should display login form by default", () => {
    const { getAllByA11yLabel } = render(<Authentication />);

    const loginFormElement = getAllByA11yLabel("loginForm");

    expect(loginFormElement.length).toBe(1);
  });
  it("should display register form when pressing on register here", () => {
    const { getByTestId, getAllByA11yLabel } = render(<Authentication />);

    const registerHerePrompt = getByTestId("registerHere");

    fireEvent.press(registerHerePrompt);

    const registerFormElement = getAllByA11yLabel("registerForm");

    expect(registerFormElement.length).toBe(1);
  });
  it("should display login form when pressing on login here", () => {
    const { getAllByA11yLabel, getByTestId } = render(<Authentication />);

    const registerHerePrompt = getByTestId("registerHere");
    fireEvent.press(registerHerePrompt);

    const loginHerePrompt = getByTestId("loginHere");
    fireEvent.press(loginHerePrompt);

    const loginFormElement = getAllByA11yLabel("loginForm");

    expect(loginFormElement.length).toBe(1);
  });
});
