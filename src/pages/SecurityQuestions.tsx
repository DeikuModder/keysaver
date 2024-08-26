import { FormEventHandler, useEffect, useState } from "react";
import LABEL from "../components/Common/LABEL";
import { handleInputChange } from "../utils/handleInputChange";
import { useNavigate } from "react-router";
import useGeneralProvider from "../hooks/useGeneralProvider";
import ADD_BTN from "../components/Common/ADD_BTN";

const SecurityQuestions = ({ gotoLink = "/" }: { gotoLink?: string }) => {
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
  });
  const { handleLogin, securityQuestions } = useGeneralProvider();
  const navigate = useNavigate();
  const [isError, setIsError] = useState("");

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError("");
      }, 4000);
    }
  }, [isError]);

  const handleConfirmQuestions: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (
      answers.answer1 !== securityQuestions.answer1 ||
      answers.answer2 !== securityQuestions.answer2 ||
      answers.answer3 !== securityQuestions.answer3
    ) {
      return setIsError("Some of your answers are incorrect");
    }

    handleLogin();
    navigate(gotoLink);
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center">
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleConfirmQuestions}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">
            {securityQuestions.question1}
          </h3>

          <LABEL title="Answer 1" flexDirection="flex-col">
            <input
              value={answers.answer1}
              onChange={handleInputChange("answer1", setAnswers)}
              required
              className="text-black w-full"
            />
          </LABEL>

          <h3 className="text-xl font-semibold">
            {securityQuestions.question2}
          </h3>

          <LABEL title="Answer 2" flexDirection="flex-col">
            <input
              value={answers.answer2}
              onChange={handleInputChange("answer2", setAnswers)}
              required
              className="text-black w-full"
            />
          </LABEL>

          <h3 className="text-xl font-semibold">
            {securityQuestions.question3}
          </h3>

          <LABEL title="Answer 3" flexDirection="flex-col">
            <input
              value={answers.answer3}
              onChange={handleInputChange("answer3", setAnswers)}
              required
              className="text-black w-full"
            />
          </LABEL>
        </div>

        <ADD_BTN title="Confirm" type="submit" />
      </form>
      {isError && <p className="text-xl font-semibold text-red-500"></p>}
    </section>
  );
};

export default SecurityQuestions;
