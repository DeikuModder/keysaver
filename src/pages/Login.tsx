import { FormEventHandler, useEffect, useState } from "react";
import LABEL from "../components/Common/LABEL";
import TITLE from "../components/Common/TITLE";
import useGeneralProvider from "../hooks/useGeneralProvider";
import { handleInputChange } from "../utils/handleInputChange";
import ADD_BTN from "../components/Common/ADD_BTN";
import { useNavigate } from "react-router";

const Login = () => {
  const [userInput, setUserInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState("");
  const {
    userData,
    handleLogin: loginFn,
    passwordAttempts,
    setPasswordAttempts,
  } = useGeneralProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError("");
      }, 4000);
    }
  }, [isError]);

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (userInput.password !== userInput.confirmPassword) {
      return setIsError("The passwords doesn't match");
    }

    if (userInput.password !== userData.password) {
      setPasswordAttempts(passwordAttempts - 1);
      return setIsError(
        `Incorrect password, ${passwordAttempts} tries remaining`
      );
    }

    loginFn();
    navigate("/");
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center">
      <TITLE />

      <form className="flex flex-col items-center gap-4" onSubmit={handleLogin}>
        <LABEL title="Password" flexDirection="flex-col text-white">
          <input
            value={userInput.password}
            onChange={handleInputChange("password", setUserInput)}
            type="password"
            className={`${isError && "border border-red-600"} text-black`}
            required
          />
        </LABEL>

        <LABEL title="Confirm password" flexDirection="flex-col text-white">
          <input
            value={userInput.confirmPassword}
            onChange={handleInputChange("confirmPassword", setUserInput)}
            type="password"
            className={`${isError && "border border-red-600"} text-black`}
            required
          />
        </LABEL>

        <ADD_BTN title="Log in" type="submit" />
      </form>
      {isError && (
        <p className="text-red-500 font-semibold text-xl">{isError}</p>
      )}
    </section>
  );
};

export default Login;
