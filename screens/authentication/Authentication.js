import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Form as FormNB, Item, Text } from "native-base";

import { Form } from "../../components/form/Form";

export const Authentication = () => {
  return (
    <View>
      <Form
        initialState={{
          username: "",
          email: "",
          password: "",
          password2: "",
        }}
      >
        {({ state, onChange }) => {
          const { username, email, password, password2 } = state;

          return (
            <FormNB>
              <Text style={styles.header}>Register</Text>
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
            </FormNB>
          );
        }}
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: "center",
  },
});
