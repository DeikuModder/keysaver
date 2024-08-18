import useProvider from "../providers/useProvider";

const useGeneralProvider = () => {
  const useData = useProvider();

  const { userData, setUserData, securityQuestions, setSecurityQuestions } =
    useData;

  return {
    userData,
    setUserData,
    securityQuestions,
    setSecurityQuestions,
  };
};

export default useGeneralProvider;
