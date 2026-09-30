import React from "react";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import MyButton from "../components/MyButton";
import { COLORS, TextBold } from "../theme/Theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  title: {
    textAlign: "center",
    color: COLORS.text,
  },
  subTitle: {
    color: COLORS.textTertiary,
  },
  textContainer: {
    flex: 1, // Takes up all the empty space above the button
    justifyContent: "center", // Centers the text vertically in that space
    alignItems: "center",
    gap: 8,
  },
  buttonContainer: {
    marginBottom: 50, // Just a little padding from the bottom edge
  },
});

export default function OnboardingScreen() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar style={COLORS.backgroundColor} />

      <View style={styles.textContainer}>
        <Text style={[styles.title, TextBold]}>Welcome to Relay</Text>
        <Text style={styles.subTitle}>
          Message with other people more easily.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <MyButton text={"login"} />
      </View>
    </View>
  );
}
