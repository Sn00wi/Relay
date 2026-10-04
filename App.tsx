import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import OnboardingScreen from './src/screens/OnboardingScreen';
import AuthorizationScreen from './src/screens/AuthorizationScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import { RootStackParamList } from './src/navigation/types';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" /> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={OnboardingScreen}  options={{ headerShown: false }}   />
          <Stack.Screen name="Authorization" component={AuthorizationScreen}  options={{ headerShown: false }}   />
          <Stack.Screen name="Registration" component={RegistrationScreen}  options={{ headerShown: false }}   />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
