import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { PasswordItem, SecurityQuestions, userInformation } from "../type";

export const DataContext = React.createContext(
  {} as ReturnType<typeof useData>
);

const useData = () => {
  const [userInfo, setUserInfo] = useLocalStorage("userInformation", {
    username: "",
    password: "",
  });
  const [questions, setQuestions] = useLocalStorage("securityQuestions", {
    question1: "",
    answer1: "",
    question2: "",
    answer2: "",
    question3: "",
    answer3: "",
  });
  const [keys, setKeys] = useLocalStorage("keysArr", [] as PasswordItem[]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordAttempts, setPasswordAttempts] = useState(3);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const userData = userInfo as userInformation;

  const setUserData = setUserInfo as (value: userInformation) => void;

  const securityQuestions = questions as SecurityQuestions;

  const setSecurityQuestions = setQuestions as (
    value: SecurityQuestions
  ) => void;

  const keysItem = keys as PasswordItem[];

  const setKeysItem = setKeys as (value: PasswordItem[]) => void;

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
