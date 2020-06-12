import React from "react";
import { View } from "react-native";
import { render } from "react-native-testing-library";
import { Form } from "./Form";

describe("Form", () => {
  let onSubmitSpy = jest.fn();
  let defaultProps;
  beforeEach(() => {
    jest.clearAllMocks();
    defaultProps = {
      handleSubmit: onSubmitSpy,
      initialState: {},
    };
  });
  it("should render the form container", () => {
    const { getAllByA11yLabel } = render(
      <Form {...defaultProps}>{() => {}}</Form>,
    );

    const formContainer = getAllByA11yLabel("formContainer");

    expect(formContainer.length).toBe(1);
  });
  it("can render children", () => {
    const { getAllByA11yLabel } = render(
      <Form {...defaultProps}>
        {() => {
          return <View accessibilityLabel="test">meow</View>;
        }}
      </Form>,
    );

    const viewElement = getAllByA11yLabel("test");

    expect(viewElement.length).toBe(1);
  });
});
