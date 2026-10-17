import React from "react";
import { View } from "react-native";
import Button from "../components/Button";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "RegistrationSecond">;

export default function RegistrationScreenSecond({ navigation }: Props) {
  return (
    <View>
      <Button text="dffdd" onPress={() => navigation.navigate("RegistrationFirst")}></Button>
    </View>
  );
}