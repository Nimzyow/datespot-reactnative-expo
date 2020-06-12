import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";

export const Home = () => {
  return (
    <View accessibilityLabel="homeContainer">
      <Button accessibilityLabel="getStarted">
        <Text>Hello</Text>
      </Button>
    </View>
  );
};
