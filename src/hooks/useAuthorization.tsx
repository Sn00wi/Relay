import React, { useState }  from "react";
import { AuthSession, login } from '../services/auth';



export default function useAuthorization(
  onSuccess: (session: AuthSession) => void
) {   
  
  const [loginInput, setLoginInput] = useState("");
  const loginInputEmpty = loginInput.trim() === '';
  
  const [password, setPassword] = useState("");
  const passwordEmpty = password.trim() === '';
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loginError, setLoginError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const submitClick = async () => {
    if (isLoading) return;
    
    setIsSubmitted(true);
    setLoginError(undefined);

    if (loginInput || passwordEmpty) return;

    setIsLoading(true);

    try {
      const result = await login({ loginInput, password });
        onSuccess(result)
    } catch (err) {
        setLoginError(err instanceof Error ? err.message : 'Unable to log in')
    } finally {
        setIsLoading(false);
      }
    
    return
}
  return {
    loginError,
    setLoginError,
    loginInput,
    setLoginInput,
    loginInputEmpty,
    password,
    setPassword,
    passwordEmpty,
    isSubmitted,
    isLoading,
    submitClick,
  }

}