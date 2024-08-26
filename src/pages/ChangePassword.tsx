import { FormEventHandler, useEffect, useState } from "react";
import useGeneralProvider from "../hooks/useGeneralProvider";
import LABEL from "../components/Common/LABEL";
import { handleInputChange } from "../utils/handleInputChange";
import ADD_BTN from "../components/Common/ADD_BTN";
import ErrorToast from "../components/Toasts/ErrorToast";
import LEGEND from "../components/Common/LEGEND";
import { useNavigate } from "react-router";

const ChangePassword = () => {
  const [userInput, setUserInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState("");
  const { userData, setUserData } = useGeneralProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError("");
      }, 4000);
    }
  }, [isError]);

  const handleChangePassword: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (userInput.password !== userInput.confirmPassword) {
      return setIsError("The passwords doesn't match");
    }

    if (userInput.password === userData.password) {
      return setIsError("The new password can't be the same as the old one");
    }

    setUserData({
      ...userData,
      password: userInput.password,
    });

    navigate("/");
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center">
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleChangePassword}
      >
        <LEGEND title="Change password" />

        <LABEL title="New password" flexDirection="flex-col">
          <input
            value={userInput.password}
            onChange={handleInputChange("password", setUserInput)}
            type="password"
            className="text-black"
            required
          />
        </LABEL>

        <LABEL title="Confirm password" flexDirection="flex-col">
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

export default ChangePassword;
