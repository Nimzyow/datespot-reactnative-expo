import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "native-base";

import { registerForm, loginForm } from "../../Utilities/FormFarm";

export const Authentication = () => {
  const [form, setForm] = useState("login");

  const handleSubmit = (state) => {
    console.log("state", state);
  };

  return (
    <View>
      {form === "register" ? (
        <View>
          {registerForm(handleSubmit)}
          <Text
            onPress={() => {
              setForm("login");
            }}
            testID="loginHere"
          >
            Registered already? Press here to sign in
          </Text>
        </View>
      ) : (
        <View>
          {loginForm(handleSubmit)}
          <Text
            onPress={() => {
              setForm("register");
            }}
            testID="registerHere"
          >
            Not Registered yet? Press here to register
          </Text>
        </View>
      )}
    </View>
  );
};
