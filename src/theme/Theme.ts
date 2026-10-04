import { StyleSheet, TextInputComponent } from 'react-native';

// base colors
export const COLORS = {
  background: '#131316',
  white: '#FFFFFF',
  textTertiary: '#A0A0AB',
  secondaryColor: '#FFF5F6',
  baseColor: '#000000',
  grayBgPrimary: '#3F3F46',
  error: '#F97066',
};

export const SPACING = {
  small: 8,
  screen: 24,
};

// Shared styles can be imported individually by screens and components.
export const { TextBold, TextTertiary, buttonContainer, TextSemiBold } = StyleSheet.create({
  TextBold: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    color: COLORS.white,
  },
  TextSemiBold: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.white,
  },
  TextTertiary: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textTertiary,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 340,
    paddingBottom: SPACING.screen,
  },
});
