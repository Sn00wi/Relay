import React, { useState }  from "react";
import { AuthSession, login } from '../services/auth';



export default function useAuthorization(
  onSuccess: (session: AuthSession) => void
) {   
  const [email, setEmail] = useState("");
  const emailEmpty = email.trim() === '';
  
  const [password, setPassword] = useState("");
  const passwordEmpty = password.trim() === '';
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loginError, setLoginError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const submitClick = async () => {
    if (isLoading) return;
    
    setIsSubmitted(true);
    setLoginError(undefined);

    if (emailEmpty || passwordEmpty) return;

    setIsLoading(true);

    try {
      const result = await login({ email, password });
        onSuccess(result)
    } catch (err) {
        setLoginError(err instanceof Error ? err.message : 'Unable to log in')
    } finally {
        setIsLoading(false);
      }
    
    return
}
  return {
    email,
    setEmail,
    loginError,
    setLoginError,
    password,
    setPassword,
    passwordEmpty,
    isSubmitted,
    emailEmpty,
    isLoading,
    submitClick,
  }

}