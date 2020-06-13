import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Form as FormNB, Item, Text } from "native-base";

import { FormCreater } from "../../components/form/Form";

export const Authentication = () => {
  return (
    <View>
      <FormCreater
        initialState={{
          username: "",
          email: "",
          password: "",
          password2: "",
        }}
        formName="Register"
        buttonLabel="Submit"
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
                  onChangeText={(value) => onChange({ email: value })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="password"
                  value={password}
                  onChangeText={(value) => onChange({ password: value })}
                />
              </Item>
              <Item last>
                <Input
                  placeholder="password2"
                  value={password2}
                  onChangeText={(value) => onChange({ password2: value })}
                />
              </Item>
            </View>
          );
        }}
      </FormCreater>
    </View>
  );
};
