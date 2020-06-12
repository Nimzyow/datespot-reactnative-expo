import React from "react";
import { View, Button } from "react-native";

export const Home = () => {
  return (
    <View accessibilityLabel="homeContainer">
      <Button title="Sign in" accessibilityLabel="signInButton" />
      <Button title="Register" accessibilityLabel="registerButton" />
    </View>
  );
};
