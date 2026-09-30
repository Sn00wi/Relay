import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../theme/Theme';

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.secondaryColor,
        color: COLORS.baseColor,
        borderRadius: 4,
        padding: [10, 14],
        width: 340,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonPressed: {
        backgroundColor: COLORS.secondaryColor,
        opacity: 0.8, 
    },
});

type Props = {
    text: string;
};

export default function MyButton({ text }: Props) {


    return (
      <Pressable 
        style={({ pressed }) => [
          styles.button, 
          pressed && styles.buttonPressed // Эффект нажатия
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
}

