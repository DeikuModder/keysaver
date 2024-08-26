import useGeneralProvider from "../hooks/useGeneralProvider";
import Login from "./Login";
import SecurityQuestions from "./SecurityQuestions";

const LoginSystem = () => {
  const { loginPreferences } = useGeneralProvider();

  return (
    <>
      {loginPreferences.loginWithSecurityQuestions ? (
        <SecurityQuestions />
      ) : (
        <Login />
      )}
    </>
  );
};

export default LoginSystem;
