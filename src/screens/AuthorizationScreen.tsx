import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyButton from '../components/MyButton';
import { COLORS } from "../theme/Theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        
  },
    text: {
        
    },
});


export default function AuthorizationScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.text}>
              </View>
              <View style={styles.text}>
              </View>
              <View>
                <MyButton text={"login"} />
              </View>
            </View>
        </View>
    );
}