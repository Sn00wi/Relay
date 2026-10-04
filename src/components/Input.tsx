import React from 'react';
import { StyleSheet, View, TextInput, type TextInputProps } from 'react-native';
import { Colors } from '../theme/Theme';
type Props = TextInputProps & {
  value: string;
  onChangeText: (text: string) => void;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.grayBgPrimary,
    width: '100%',
    paddingBlock: 0,
    paddingInline: 12,
    borderRadius: 8,
    maxHeight: 340,
    height: 40,
    color: Colors.white,
  },
  errorInput: {
    borderColor: Colors.error,
  },
});


export default function Input({ style, ...props }: Props) {
  return (
    <View>
      <TextInput
        placeholderTextColor={Colors.grayBgPrimary}
        {...props}
        style={[styles.input, style]}
      />
    </View>
  );
}
