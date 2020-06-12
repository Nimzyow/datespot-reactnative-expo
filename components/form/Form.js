import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

export const Form = (props) => {
  return <View accessibilityLabel="formContainer">{props.children({})}</View>;
};
