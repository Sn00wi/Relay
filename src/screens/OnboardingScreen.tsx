import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";
import { TextBold, TextTertiary, buttonContainer, SPACING } from "../theme/Theme";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import Screen from "../components/Screen";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  centeredText: {
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: SPACING.screen,
    gap: SPACING.small,
  },
  buttonContainer: {
    gap: 10,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <Screen style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.textContainer}>
        <Text style={[TextBold, styles.centeredText]}>Welcome to Relay</Text>
        <Text style={[TextTertiary, styles.centeredText]}>
          Message with other people more easily.
        </Text>
      </View>

      <View style={[buttonContainer, styles.buttonContainer]}>
        <Button
          text={"login"}
          onPress={() => navigation.navigate("Authorization")}
        />
        <Text style={[TextTertiary, styles.centeredText]}>or</Text>
        <Button
          text={"Registration"}
          onPress={() => navigation.navigate("Registration")}
        />
      </View>
    </Screen>
  );
}
