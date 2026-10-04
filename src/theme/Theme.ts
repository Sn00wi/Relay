import { StyleSheet, TextInputComponent } from 'react-native';

// base colors
export const Colors = {
  background: '#131316',
  white: '#FFFFFF',
  textTertiary: '#A0A0AB',
  secondaryColor: '#FFF5F6',
  baseColor: '#000000',
  grayBgPrimary: '#3F3F46',
  error: '#F97066',
};

export const Gaps = {
  gp8: 8,
  gp16: 16,
  gp12: 12,
  gp24: 24,
};

// Shared styles can be imported individually by screens and components.
export const { TextBold, TextTertiary, TextSemiBold } = StyleSheet.create({
  TextBold: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    color: Colors.white,
    textAlign: "center",

  },
  TextSemiBold: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.white,
  },
  TextTertiary: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.textTertiary,
    textAlign: "center",

  },
});
