import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "native-base";

import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

export const Authentication = () => {
  const [form, setForm] = useState("register");

  const handleSubmit = (state) => {
    console.log("state", state);
  };

  return (
    <View>
      {form === "register" ? (
        <View>
          <RegisterForm handleSubmit={handleSubmit} />
          <Text
            onPress={() => {
              setForm("login");
            }}
          >
            Registered already? Press here to sign in
          </Text>
        </View>
      ) : (
        <View>
          <LoginForm handleSubmit={handleSubmit} />
          <Text
            onPress={() => {
              setForm("register");
            }}
          >
            Not Registered yet? Press here to register
          </Text>
        </View>
      )}
    </View>
  );
};
