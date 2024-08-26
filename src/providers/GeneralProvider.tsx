import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  LoginPreferences,
  PasswordItem,
  SecurityQuestions,
  userInformation,
} from "../type";

export const DataContext = React.createContext(
  {} as ReturnType<typeof useData>
);

const useData = () => {
  const [userInfo, setUserInfo] = useLocalStorage("userInformation", {
    username: "",
    password: "",
    preservedIsAuthenticated: false,
  });
  const [questions, setQuestions] = useLocalStorage("securityQuestions", {
    question1: "",
    answer1: "",
    question2: "",
    answer2: "",
    question3: "",
    answer3: "",
  });
  const [login, setLogin] = useLocalStorage("loginPreferences", {
    preserveSession: false,
    loginWithSecurityQuestions: false,
  });
  const [theme, setTheme] = useLocalStorage("theme", {
    primary: "#323232",
    secondary: "#292929",
    complementary: "#525252",
    text: "#fff",
  });
  const [keys, setKeys] = useLocalStorage("keysArr", [] as PasswordItem[]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordAttempts, setPasswordAttempts] = useState(3);

  const userData = userInfo as userInformation;

  const setUserData = setUserInfo as (value: userInformation) => void;

  const securityQuestions = questions as SecurityQuestions;

  const setSecurityQuestions = setQuestions as (
    value: SecurityQuestions
  ) => void;

  const keysItem = keys as PasswordItem[];

  const setKeysItem = setKeys as (value: PasswordItem[]) => void;

  const loginPreferences = login as LoginPreferences;

  const setLoginPreferences = setLogin as (value: LoginPreferences) => void;

  const appTheme = theme as {
    primary: string;
    secondary: string;
    complementary: string;
    text: string;
    name: string;
  };

  const setAppTheme = setTheme as (value: {
    primary: string;
    secondary: string;
    complementary: string;
    text: string;
    name: string;
  }) => void;

  const handleLogin = () => {
    setIsAuthenticated(true);
    setUserData({ ...userData, preservedIsAuthenticated: true });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData({ ...userData, preservedIsAuthenticated: false });
  };

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
