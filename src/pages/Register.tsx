import { FormEventHandler, useEffect, useState } from "react";
import ADD_BTN from "../components/Common/ADD_BTN";
import LABEL from "../components/Common/LABEL";
import { handleInputChange } from "../utils/handleInputChange";
import ErrorToast from "../components/Toasts/ErrorToast";
import useGeneralProvider from "../hooks/useGeneralProvider";
import TITLE from "../components/Common/TITLE";

const Register = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState("");
  const { userData, setUserData } = useGeneralProvider();

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError("");
      }, 4000);
    }
  }, [isError]);

  const handleRegister: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (userInput.password !== userInput.confirmPassword) {
      return setIsError("The passwords doesn't match");
    }

    setUserData({
      ...userData,
      username: userInput.username,
      password: userInput.password,
    });
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center">
      <TITLE />

      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleRegister}
      >
        <LABEL title="Username" flexDirection="flex-col text-white">
          <input
            value={userInput.username}
            onChange={handleInputChange("username", setUserInput)}
            className="text-black"
            required
          />
        </LABEL>

        <LABEL title="Set password" flexDirection="flex-col text-white">
          <input
            value={userInput.password}
            onChange={handleInputChange("password", setUserInput)}
            type="password"
            className="text-black"
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

        <ADD_BTN title="Save" type="submit" />
      </form>
      {isError && <ErrorToast content={isError} />}
    </section>
  );
};

export default Register;
