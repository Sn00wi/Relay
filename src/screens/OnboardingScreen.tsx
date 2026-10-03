import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native'; 
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
    textAlign: "center",
  },
  textContainer: {
    flex: 1, // Takes up all the empty space above the button
    justifyContent: "center", // Centers the text vertically in that space
    alignItems: "center",
    gap: 8,
  },
  buttonContainer: {
    paddingBottom: 50,// Just a little padding from the bottom edge
    gap: 10,
  },
});

type RootStackParamList = {
  Onboarding: undefined;
  Authorization: undefined;
  Registration: undefined;
};

export default function OnboardingScreen() {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.textContainer}>
        <Text style={[styles.title, TextBold]}>Welcome to Relay</Text>
        <Text style={styles.subTitle}>
          Message with other people more easily.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <MyButton text={"login"} onPress={() => navigate.navigate("Authorization")} />
        <Text style={styles.subTitle}>or</Text>
        <MyButton text={"Registration"} onPress={() => navigate.navigate("Registration")}  />
      </View>
    </View>
  );
}
