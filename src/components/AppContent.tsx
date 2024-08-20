import { Route, Routes, useNavigate } from "react-router";
import useGeneralProvider from "../hooks/useGeneralProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterSystem from "../pages/RegisterSystem";
import SecurityQuestions from "../pages/SecurityQuestions";
import { useEffect } from "react";

const getUserInfo = window.localStorage.getItem("userInformation");
const getSecQuestions = window.localStorage.getItem("securityQuestions");

const AppContent = () => {
  const { isAuthenticated, passwordAttempts } = useGeneralProvider();
  const navigate = useNavigate();

  document.body.style.backgroundColor = "#323232";

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");

      if (passwordAttempts <= 0) {
        navigate("/security-questions");
      }

      if (!getUserInfo && !getSecQuestions) {
        navigate("/register");
      }
    }
  }, [isAuthenticated, navigate, passwordAttempts]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/security-questions" element={<SecurityQuestions />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterSystem />} />
    </Routes>
  );
};

export default AppContent;
