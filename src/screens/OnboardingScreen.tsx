import React from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    
});

export default function OnboardingScreen() {

    const { width, height } = useWindowDimensions();

    return (
        <View >
            <StatusBar style="auto" />
        </View>
    );
}


