import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "native-base";

import { connect } from "react-redux";

import { registerForm, loginForm } from "../../Utilities/FormFarm";
import { registerUser } from "../../actions/auth";

export const Authentication = ({ registerUser }) => {
  const [form, setForm] = useState("login");

  const handleSubmit = async (state) => {
    if (form === "login") {
    } else if (form === "register") {
      await registerUser(state);
    }
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  registerUser,
})(Authentication);
