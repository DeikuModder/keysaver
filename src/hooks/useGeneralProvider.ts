import useProvider from "../providers/useProvider";

const useGeneralProvider = () => {
  const useData = useProvider();

  const {
    userData,
    setUserData,
    securityQuestions,
    setSecurityQuestions,
    isAuthenticated,
    handleLogin,
    handleLogout,
    passwordAttempts,
    setPasswordAttempts,
    keysItem,
    setKeysItem,
    loginPreferences,
    setLoginPreferences,
    appTheme,
    setAppTheme,
  } = useData;

  return {
    userData,
    setUserData,
    securityQuestions,
    setSecurityQuestions,
    isAuthenticated,
    handleLogin,
    handleLogout,
    passwordAttempts,
    setPasswordAttempts,
    keysItem,
    setKeysItem,
    loginPreferences,
    setLoginPreferences,
    appTheme,
    setAppTheme,
  };
};

export default useGeneralProvider;
