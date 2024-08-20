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
  };
};

export default useGeneralProvider;
