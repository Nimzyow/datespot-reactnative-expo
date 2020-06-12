import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";

export const Home = () => {
  return (
    <View accessibilityLabel="homeContainer">
      <Text>LAURA</Text>
      <Button title="Sign in" accessibilityLabel="signInButton">
        <Text>Hello</Text>
      </Button>
      <Button title="Register" accessibilityLabel="registerButton" />
    </View>
  );
};
