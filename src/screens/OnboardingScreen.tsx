import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";
import { MainText, SupportText, Gaps, Colors } from "../theme/Theme";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.background,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: Gaps.gp24,
    gap: Gaps.gp16,
  },
  buttonContainer: {
    gap: Gaps.gp10,
    width: "100%",
    maxWidth: 340,
    paddingBottom: Gaps.gp24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <StatusBar style="light" />

        <View style={styles.textContainer}>
          <Text style={MainText}>Welcome to Relay</Text>
          <Text style={SupportText}>
            Message with other people more easily.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          text={"Log in"}
          onPress={() => navigation.navigate("Authorization")}
        />
        <Text style={SupportText}>or</Text>
        <Button
          text={"Registration"}
          onPress={() => navigation.navigate("Registration")}
        />
      </View>
    </View>
  );
}
