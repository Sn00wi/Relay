import React from "react";
import { View } from "react-native";
import Button from "../components/Button";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "RegistrationFirst">;

export default function RegistrationScreenFirst({ navigation }: Props) {
  return (
    <View>
      <Button text="next" onPress={() => navigation.navigate("RegistrationSecond")}></Button>
    </View>
  );
}