import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Colors, Radius, Gaps, FontSizes } from '../theme/Theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: Radius.r6,
    paddingBlock: Gaps.gp10,
    paddingHorizontal: Gaps.gp14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: FontSizes.fz14,
    lineHeight: 20,
    color: Colors.baseColor,
  },
  buttonPressed: {
      opacity: 0.7, 
    },
});

type Props = {
  text: string;
  onPress?: () => void;
  backgroundColor?: string;
  variant?: 'default' | 'back' | 'choice';
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
