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

import { login } from '../services/auth';


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
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [loginError, setLoginError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  
  const emailEmpty = email.trim() === '';
  const passwordEmpty = password.trim() === '';

  const submitClick = async () => {
    if (isLoading) return;
    
    setIsSubmitted(true);
    setLoginError(undefined);

    if (emailEmpty || passwordEmpty) return;

    setIsLoading(true);

    try {
      const result = await login({ email, password });
      navigation.navigate("MainScreen", {
        session: result,  
      })
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : 'Unable to log in')
    } finally {
        setIsLoading(false);
      }
    
    return
}
  
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
            onChangeText={(text) => {
              setEmail(text)
              setLoginError(undefined);
            }}
            placeholder={"Input your email"}
            keyboardType={"email-address"}
            autoCapitalize={"none"}
            autoCorrect={false}
            backgroundColor={Colors.background}
            error={
              isSubmitted && emailEmpty ? "This field is required" : loginError
            }
            editable={!isLoading}
          />
          
          <View>
            <Input
              value={password}
              onChangeText={(text) => {
                setPassword(text)
                setLoginError(undefined);
              }}
              placeholder={"Password"}
              keyboardType={"default"}
              autoCapitalize={"none"}
              autoCorrect={false}
              backgroundColor={Colors.background}
              variant="password"
              error={
                isSubmitted && passwordEmpty ? "This field is required" : loginError
              }
              editable={!isLoading}
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
          <Button
            text={isLoading ? 'Logging in...' : 'Log in'}
            onPress={submitClick}
          />
          <Button
            text={"Back"}
            onPress={() => navigation.navigate("Onboarding")}
          />
        </View>
        
      </View>
    </ImageBackground>
  );
}
// Изменить кнопку назад 