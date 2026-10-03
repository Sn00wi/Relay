import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { COLORS } from '../theme/Theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondaryColor,
    color: COLORS.baseColor,
    borderRadius: 6,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    width: 340,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.baseColor,
  },
  buttonPressed: {
      opacity: 0.7, 
    },
});

type Props = {
  text: string;
  onPress?: () => void;
};

export default function MyButton({ text, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed, // Эффект нажатия
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}