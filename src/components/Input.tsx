import React, { useState } from "react";
import { StyleSheet, View, TextInput, type TextInputProps, Pressable} from "react-native";
import { Colors, Gaps, Radius } from "../theme/Theme";
import { Image } from "expo-image";

const EyeClosed = require("../../assets/eye-closed.svg");
const EyeOpen = require("../../assets/eye-open.svg");

type Props = TextInputProps & {
  value: string;
  onChangeText: (text: string) => void;
  backgroundColor?: string;
  variant?: 'default' | 'password' | 'search';
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.grayBgPrimary,
    width: "100%",
    paddingBlock: 0,
    paddingInline: Gaps.gp12,
    borderRadius: Radius.r8,
    maxHeight: 340,
    height: 40,
    color: Colors.white,
  },
  errorInput: {
    borderColor: Colors.error,
  },
  icon: {
    position: "absolute",
    right: 12,
    top: 10,
  },
  eye: {
    width: 20,
    height: 20,
  },
  inputWithIconEye: {
    paddingRight: Gaps.gp50,
  },
});

export default function Input({style, backgroundColor, variant = 'default', ...props }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const isPassword = variant === 'password';
  
  return (
    <View>
      <TextInput
        placeholderTextColor={Colors.grayBgPrimary}
        {...props}
        secureTextEntry={isPassword ? !isPasswordVisible : props.secureTextEntry}
        style={[styles.input, { backgroundColor }, style, isPassword && styles.inputWithIconEye,]}
      />
      {isPassword && (
        <Pressable
          style={styles.icon}
          onPress={() => { setIsPasswordVisible(state => !state) }}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={
             isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'
           }>
          <Image
              source={isPasswordVisible ? EyeOpen : EyeClosed}
              style={styles.eye}
              contentFit="contain"
              accessible={false}
              pointerEvents="none"
            />         
        </Pressable>
      )}
    </View>
  );
}
