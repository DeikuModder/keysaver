import { useState } from "react";
import "./styles/toast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import useGeneralProvider from "../../hooks/useGeneralProvider";

interface Props {
  content: JSX.Element | string;
  fn: () => void;
  onClose: () => void;
  icon?: JSX.Element;
  iconColor?: string;
  textBorderColor?: string;
}

const AskToast: React.FC<Props> = ({
  content = null,
  fn,
  onClose,
  icon = (
    <FontAwesomeIcon
      icon={faQuestion}
      className="bg-red-300 rounded-full aspect-square p-2 text-red-800 font-bold"
    />
  ),
  iconColor = "bg-red-700",
  textBorderColor = "border-red-600",
}) => {
  const [visible, setVisible] = useState(true);
  const { appTheme } = useGeneralProvider();

  const handleYes = () => {
    fn();
    setVisible(false);
    onClose();
  };

  return (
    <>
      {visible && (
        <div
          className={`modal w-80 h-32 rounded-xl p-2 flex gap-2 transition-transform z-50`}
          style={{
            backgroundColor: appTheme.primary ? appTheme.primary : "#323232",
          }}
        >
          <div
            className={`${iconColor} w-[20%] flex flex-col items-center rounded-xl justify-center text-2xl`}
          >
            {icon}
          </div>
          <div
            className={`w-[80%] rounded-xl flex flex-col items-center justify-center text-lg border ${textBorderColor} text-center`}
          >
            {content}
            <div className="text-xl font-bold">
              <button
                className="bg-red-500 p-1 px-4 rounded-xl text-white"
                onClick={() => handleYes()}
              >
                Yes
              </button>
              <button
                className="p-1 px-4"
                onClick={() => {
                  setVisible(false);
                  onClose();
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AskToast;
