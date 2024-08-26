import { Route, Routes, useNavigate } from "react-router";
import useGeneralProvider from "../hooks/useGeneralProvider";
import Home from "../pages/Home";
import RegisterSystem from "../pages/RegisterSystem";
import SecurityQuestions from "../pages/SecurityQuestions";
import { useEffect } from "react";
import LoginSystem from "../pages/LoginSystem";
import ChangePassword from "../pages/ChangePassword";

const getUserInfo = window.localStorage.getItem("userInformation");
const getSecQuestions = window.localStorage.getItem("securityQuestions");

const AppContent = () => {
  const {
    userData,
    loginPreferences,
    isAuthenticated,
    passwordAttempts,
    appTheme,
  } = useGeneralProvider();
  const navigate = useNavigate();

  document.body.style.backgroundColor = appTheme.primary
    ? appTheme.primary
    : "#323232";

  document.body.style.color = appTheme.text ? appTheme.text : "#fff";

  const authenticatedVal = loginPreferences.preserveSession
    ? userData.preservedIsAuthenticated
    : isAuthenticated;

  useEffect(() => {
    if (!authenticatedVal) {
      navigate("/login");

      if (passwordAttempts <= 0) {
        navigate("/security-questions");
      }

      if (!getUserInfo && !getSecQuestions) {
        navigate("/register");
      }
    }
  }, [
    authenticatedVal,
    navigate,
    passwordAttempts,
    loginPreferences.loginWithSecurityQuestions,
  ]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/security-questions" element={<SecurityQuestions />} />
      <Route
        path="/security-questions-password"
        element={<SecurityQuestions gotoLink="/change-password" />}
      />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/login" element={<LoginSystem />} />
      <Route path="/register" element={<RegisterSystem />} />
    </Routes>
  );
};

export default AppContent;
