import { FormEventHandler, useState } from "react";
import LABEL from "../components/Common/LABEL";
import { handleInputChange } from "../utils/handleInputChange";
import ADD_BTN from "../components/Common/ADD_BTN";
import { securityQuestionsArr } from "../utils/questions";
import useGeneralProvider from "../hooks/useGeneralProvider";
import { useNavigate } from "react-router";

const SetSecurityQuestions = () => {
  const [questions, setQuestions] = useState({
    question1: "",
    answer1: "",
    question2: "",
    answer2: "",
    question3: "",
    answer3: "",
  });
  const { setSecurityQuestions, handleLogin } = useGeneralProvider();
  const navigate = useNavigate();

  const filteredQuestions = securityQuestionsArr.filter((question) => {
    return !Object.values(questions).includes(question);
  });

  const handleSaveQuestions: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    handleLogin();
    setSecurityQuestions(questions);

    navigate("/");
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center">
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleSaveQuestions}
      >
        <div className="flex flex-col gap-2">
          <LABEL title="Question 1" flexDirection="flex-col text-white">
            <select
              value={questions.question1}
              onChange={handleInputChange("question1", setQuestions)}
              className="text-neutral-900"
              required
            >
              <option value="">Select question</option>
              {securityQuestionsArr.map((question, index) => {
                return (
                  <option
                    key={`${question}-${index}`}
                    value={question}
                    disabled={!filteredQuestions.includes(question)}
                  >
                    {question}
                  </option>
                );
              })}
            </select>
          </LABEL>

          <LABEL title="Answer 1" flexDirection="flex-col text-white">
            <input
              value={questions.answer1}
              onChange={handleInputChange("answer1", setQuestions)}
              required
              className="text-black w-full"
            />
          </LABEL>

          <LABEL title="Question 2" flexDirection="flex-col text-white">
            <select
              value={questions.question2}
              onChange={handleInputChange("question2", setQuestions)}
              className="text-neutral-900"
              required
            >
              <option value="">Select question</option>
              {securityQuestionsArr.map((question, index) => {
                return (
                  <option
                    key={`${question}-${index}`}
                    value={question}
                    disabled={!filteredQuestions.includes(question)}
                  >
                    {question}
                  </option>
                );
              })}
            </select>
          </LABEL>

          <LABEL title="Answer 2" flexDirection="flex-col text-white">
            <input
              value={questions.answer2}
              onChange={handleInputChange("answer2", setQuestions)}
              required
              className="text-black w-full"
            />
          </LABEL>

          <LABEL title="Question 3" flexDirection="flex-col text-white">
            <select
              value={questions.question3}
              onChange={handleInputChange("question3", setQuestions)}
              className="text-neutral-900"
              required
            >
              <option value="">Select question</option>
              {securityQuestionsArr.map((question, index) => {
                return (
                  <option
                    key={`${question}-${index}`}
                    value={question}
                    disabled={!filteredQuestions.includes(question)}
                  >
                    {question}
                  </option>
                );
              })}
            </select>
          </LABEL>

          <LABEL title="Answer 3" flexDirection="flex-col text-white">
            <input
              value={questions.answer3}
              onChange={handleInputChange("answer3", setQuestions)}
              required
              className="text-black w-full"
            />
          </LABEL>
        </div>

        <ADD_BTN title="Save" type="submit" />
      </form>
    </section>
  );
};

export default SetSecurityQuestions;
