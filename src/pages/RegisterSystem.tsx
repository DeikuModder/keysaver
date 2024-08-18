import Register from "./Register";
import SecurityQuestions from "./SecurityQuestions";

const RegisterSystem = () => {
  return (
    <>
      {window.localStorage.getItem("userInformation") ? (
        <SecurityQuestions />
      ) : (
        <Register />
      )}
    </>
  );
};

export default RegisterSystem;
