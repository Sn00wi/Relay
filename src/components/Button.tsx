import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Colors } from '../theme/Theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 6,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.baseColor,
  },
  buttonPressed: {
      opacity: 0.7, 
    },
});

type Props = {
  text: string;
  onPress?: () => void;
};

export default function Button({ text, onPress }: Props) {
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
