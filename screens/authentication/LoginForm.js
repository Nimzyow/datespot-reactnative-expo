import React from "react";
import { View } from "react-native";
import { Input, Item } from "native-base";

import { FormCreater } from "../../components/form/Form";

export const LoginForm = ({ handleSubmit }) => {
  return (
    <FormCreater
      initialState={{
        email: "",
        password: "",
      }}
      handleSubmit={handleSubmit}
      formName="Login"
      buttonLabel="Login"
    >
      {({ state, onChange }) => {
        const { email, password } = state;

        return (
          <View>
            <Item>
              <Input
                placeholder="email"
                value={email}
                autoCapitalize="none"
                onChangeText={(value) => onChange({ email: value })}
              />
            </Item>
            <Item last>
              <Input
                placeholder="password"
                secureTextEntry={true}
                value={password}
                onChangeText={(value) => onChange({ password: value })}
              />
            </Item>
          </View>
        );
      }}
    </FormCreater>
  );
};
