import React from "react";
import { View } from "react-native";
import { Input, Item } from "native-base";

import { FormCreater } from "../../components/form/Form";

export const RegisterForm = ({ handleSubmit }) => {
  return (
    <FormCreater
      initialState={{
        username: "",
        email: "",
        password: "",
        password2: "",
      }}
      handleSubmit={handleSubmit}
      formName="Register"
      buttonLabel="Register"
    >
      {({ state, onChange }) => {
        const { username, email, password, password2 } = state;

        return (
          <View>
            <Item>
              <Input
                placeholder="username"
                value={username}
                onChangeText={(value) => onChange({ username: value })}
              />
            </Item>
            <Item>
              <Input
                placeholder="email"
                value={email}
                autoCapitalize="none"
                onChangeText={(value) => onChange({ email: value })}
              />
            </Item>
            <Item>
              <Input
                placeholder="password"
                secureTextEntry={true}
                value={password}
                onChangeText={(value) => onChange({ password: value })}
              />
            </Item>
            <Item last>
              <Input
                placeholder="password2"
                secureTextEntry={true}
                value={password2}
                onChangeText={(value) => onChange({ password2: value })}
              />
            </Item>
          </View>
        );
      }}
    </FormCreater>
  );
};
