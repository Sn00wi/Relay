import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import Input from "../components/Input";
import type { RootStackParamList } from "../navigation/types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  TextBold,
  TextTertiary,
  buttonContainer,
  TextSemiBold,
  SPACING,
} from "../theme/Theme";




const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: SPACING.screen,
  },
  buttonContainer: {
    gap: 16,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, "Authorization">;


export default function AuthorizationScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={TextBold}>Welcome back!</Text>
        <Text style={TextTertiary}>We're excited to see you again!</Text>
      </View>
      <View style={[buttonContainer, styles.buttonContainer]}>
        <Text style={TextSemiBold}>Account Information</Text>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder={"Input your email"}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder={"Password"}
          keyboardType={"default"}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </View>
      <View style={[buttonContainer, styles.buttonContainer]}>
        <Button text={"login"} />
        <Button text={"Back"} onPress={() => navigation.navigate("Onboarding")}/>
      </View>
    </Screen>
  );
}
