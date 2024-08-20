import Register from "./Register";
import SetSecurityQuestions from "./SetSecurityQuestions";

const RegisterSystem = () => {
  return (
    <>
      {window.localStorage.getItem("userInformation") ? (
        <SetSecurityQuestions />
      ) : (
        <Register />
      )}
    </>
  );
};

export default RegisterSystem;
