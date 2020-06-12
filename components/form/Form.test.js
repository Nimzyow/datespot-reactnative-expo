import React from "react";
import { View } from "react-native";
import { render, fireEvent } from "react-native-testing-library";
import { Input, Form as FormNB, Item } from "native-base";

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
  it("triggers the onChange event on input", () => {
    defaultProps.initialState = { email: "" };

    const { getByPlaceholder, getByTestId } = render(
      <Form {...defaultProps}>
        {({ state, onChange }) => {
          const { email } = state;
          return (
            <FormNB>
              <Item>
                <Input
                  placeholder="email"
                  value={email}
                  onChangeText={(value) => onChange({ email: value })}
                  testID="messageText"
                />
              </Item>
            </FormNB>
          );
        }}
      </Form>,
    );

    fireEvent(getByPlaceholder("email"), "onChangeText", "test@test.com");

    expect(getByTestId("messageText").props.value).toEqual("test@test.com");
  });
});
