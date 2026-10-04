import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import type { RootStackParamList } from "../navigation/types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  TextBold,
  TextTertiary,
  TextSemiBold,
  Colors,
  Gaps,
} from "../theme/Theme";



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.background,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: Gaps.gp24,
  },
  content: {
    width: "100%",
    alignItems: "center",
    paddingVertical: Gaps.gp24,
  },
  buttonContainer: {
    gap: 16,
    width: '100%',
    maxWidth: 340,
    paddingBottom: Gaps.gp24,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, "Authorization">;


export default function AuthorizationScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={TextBold}>Welcome back!</Text>
          <Text style={TextTertiary}>We're excited to see you again!</Text>
        </View>
        
        <View style={styles.buttonContainer}>
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
        
        <View style={styles.buttonContainer}>
          <Button text={"login"} />
          <Button text={"Back"} onPress={() => navigation.navigate("Onboarding")}/>
        </View>
      </View>
    </View>
  );
}
