import React from 'react';
import { StyleSheet, View, TextInput, type TextInputProps } from 'react-native';
import { COLORS } from '../theme/Theme';
type Props = TextInputProps & {
  value: string;
  onChangeText: (text: string) => void;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayBgPrimary,
    width: '100%',
    paddingBlock: 0,
    paddingInline: 12,
    borderRadius: 8,
    maxHeight: 340,
    height: 40,
    color: COLORS.white,
  },
  errorInput: {
    borderColor: COLORS.error,
  },
});


export default function Input({ style, ...props }: Props) {
  return (
    <View>
      <TextInput
        placeholderTextColor={COLORS.grayBgPrimary}
        {...props}
        style={[styles.input, style]}
      />
    </View>
  );
}
