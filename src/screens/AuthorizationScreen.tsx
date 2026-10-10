import React, { useState } from "react";
import { StyleSheet,  View,  Text, ImageBackground, Pressable,} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import type { RootStackParamList } from "../navigation/types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  MainText,
  SupportText,
  TextSemiBold,
  TextBrandSecondary,
  Colors,
  Gaps,
} from "../theme/Theme";

const BackgroundImage = require("../../assets/background.png");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.background,
    width: "100%",
    height: "100%",
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
    gap: Gaps.gp16,
    width: "100%",
    maxWidth: 340,
    paddingBottom: Gaps.gp24,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, "Authorization">;

export default function AuthorizationScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={BackgroundImage}
      resizeMode={"cover"}
      style={styles.container}
    >
      <View style={styles.content}>
        
        <View style={styles.textContainer}>
          <Text style={MainText}>Welcome back!</Text>
          <Text style={SupportText}>We're excited to see you again!</Text>
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
            backgroundColor={Colors.background}
          />
          
          <View>
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder={"Password"}
              keyboardType={"default"}
              autoCapitalize={"none"}
              autoCorrect={false}
              backgroundColor={Colors.background}
              variant="password"
            />
            <Pressable
              onPress={() => {}}
              hitSlop={2}
            >
              <Text style={TextBrandSecondary}>Forgot your password?</Text>
            </Pressable>
          </View>
          
        </View>

        <View style={styles.buttonContainer}>
          <Button text={"Log in"} />
          <Button
            text={"Back"}
            onPress={() => navigation.navigate("Onboarding")}
          />
        </View>
        
      </View>
    </ImageBackground>
  );
}
