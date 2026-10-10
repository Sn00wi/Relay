import { StyleSheet } from 'react-native';

// base colors
export const Colors = {
  background: '#131316',
  white: '#FFFFFF',
  SupportColor: '#A0A0AB',
  secondaryColor: '#FFF5F6',
  baseColor: '#000000',
  grayBgPrimary: '#3F3F46',
  error: '#F97066',
};

export const Gaps = {
  gp8: 8,
  gp10: 10,
  gp12: 12,
  gp14: 14,
  gp16: 16,
  gp24: 24,
  gp50: 50,
};
export const Radius = {
  r6: 6,
  r8: 8,
  r10: 10
  
};

export const FontSizes = {
  fz12: 12,
  fz14: 14,
  fz24: 24,
}


// Shared styles can be imported individually by screens and components.
export const { MainText, SupportText, TextSemiBold, TextBrandSecondary } = StyleSheet.create({
  MainText: {
    fontWeight: '700',
    fontSize: FontSizes.fz24,
    lineHeight: 32,
    color: Colors.white,
    textAlign: "center",

  },
  SupportText: {
    fontWeight: '400',
    fontSize: FontSizes.fz14,
    lineHeight: 20,
    color: Colors.SupportColor,
    textAlign: "center",
  },
  TextBrandSecondary: {
    fontWeight: '400',
    fontSize: FontSizes.fz12,
    lineHeight: 23,
    color: Colors.white,
  },
  TextSemiBold: {
    fontWeight: '600',
    fontSize: FontSizes.fz14,
    lineHeight: 20,
    color: Colors.white,
  },  
});
