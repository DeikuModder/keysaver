import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { SecurityQuestions, userInformation } from "../type";

export const DataContext = React.createContext(
  {} as ReturnType<typeof useData>
);

const useData = () => {
  const [userInfo, setUserInfo] = useLocalStorage("userInformation", {
    username: "",
    password: "",
    isAuthenticated: false,
  });
  const [questions, setQuestions] = useLocalStorage("securityQuestions", {
    question1: "",
    answer1: "",
    question2: "",
    answer2: "",
    question3: "",
    answer3: "",
  });

  const userData = userInfo as userInformation;

  const setUserData = setUserInfo as (value: userInformation) => void;

  const securityQuestions = questions as SecurityQuestions;

  const setSecurityQuestions = setQuestions as (
    value: SecurityQuestions
  ) => void;

  return {
    userData,
    setUserData,
    securityQuestions,
    setSecurityQuestions,
  };
};

const GeneralProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <DataContext.Provider value={useData()}>{children}</DataContext.Provider>
  );
};

export default GeneralProvider;
