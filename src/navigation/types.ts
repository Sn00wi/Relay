import { type AuthSession } from '../services/auth';


export type RootStackParamList = {
  Onboarding: undefined;
  Authorization: undefined;
  RegistrationFirst: undefined;
  RegistrationSecond: undefined;
  MainScreen: {
    session: AuthSession
  };
};