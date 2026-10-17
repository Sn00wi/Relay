import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import OnboardingScreen from './src/screens/OnboardingScreen';
import AuthorizationScreen from './src/screens/AuthorizationScreen';
import RegistrationScreenFirst from './src/screens/RegistrationScreenFirst';
import RegistrationScreenSecond from './src/screens/RegistrationScreenSecond';
import MainScreen from './src/screens/MainScreen';
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
          <Stack.Screen name="RegistrationFirst" component={RegistrationScreenFirst}  options={{ headerShown: false }}   />
          <Stack.Screen name="RegistrationSecond" component={RegistrationScreenSecond}  options={{ headerShown: false }}   />
          <Stack.Screen name="MainScreen" component={MainScreen}  options={{ headerShown: false }}   />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
