import React, { useState, useEffect } from "react";
import { View } from "react-native";

export const Form = (props) => {
  const [state, setState] = useState(props.initialState);

  const onChange = (e) => {
    setState({
      ...state,
      ...e,
    });
  };

  return (
    <View accessibilityLabel="formContainer">
      {props.children({ state, onChange })}
    </View>
  );
};
