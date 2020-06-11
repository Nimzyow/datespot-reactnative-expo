import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "native-base";

export default function App() {
  return (
    <View style={styles.container} accessibilityLabel="viewElement">
      <TouchableOpacity>
        <Text>Open up App.js to start working on your app!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
