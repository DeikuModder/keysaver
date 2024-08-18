import { Route, Routes } from "react-router";
import useGeneralProvider from "../hooks/useGeneralProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterSystem from "../pages/RegisterSystem";

const AppContent = () => {
  const { userData } = useGeneralProvider();

  document.body.style.backgroundColor = "#323232";

  return (
    <>
      {window.localStorage.getItem("userInformation") &&
      window.localStorage.getItem("securityQuestions") ? (
        userData.isAuthenticated ? (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </>
        ) : (
          <Login />
        )
      ) : (
        <RegisterSystem />
      )}
    </>
  );
};

export default AppContent;
