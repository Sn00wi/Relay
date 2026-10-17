import React from "react";
import { View, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";


type Props = NativeStackScreenProps<RootStackParamList, "MainScreen">;

export default function MainScreen({ route }: Props) {   
  const { session } = route.params; 
  
  return (
    <View>
      {session && (
        <Text>
          Welcome, {session.user.name}!
        </Text>
      )}
    </View>
  );
}