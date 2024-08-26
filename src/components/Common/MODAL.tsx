import CLOSE_BTN from "./CLOSE_BTN";
import ModalProvider from "../../providers/ModalProvider";
import useModal from "../../hooks/useModal";
import useGeneralProvider from "../../hooks/useGeneralProvider";

const CONTENT = ({
  children,
  onClose,
  width,
  height,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  onClose: () => void;
  width: string;
  height: string;
  title?: string;
}) => {
  const { appTheme } = useGeneralProvider();

  return (
    <div className="modal">
      <div
        className="flex items-center text-base rounded-t-xl"
        style={{
          backgroundColor: appTheme.secondary ? appTheme.secondary : "#292929",
        }}
      >
        <p className="w-[90%] px-2 font-semibold">{title}</p>
        <div className="w-[10%]">
          <CLOSE_BTN onClose={onClose} />
        </div>
      </div>
      <div
        className={`rounded-b-xl ${width} ${height} overflow-auto`}
        style={{
          backgroundColor: appTheme.primary ? appTheme.primary : "#323232",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const MODAL_WINDOW = ({
  children,
  buttonContent,
  width,
  height,
  buttonStyle,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  buttonContent: JSX.Element | JSX.Element[] | string;
  width: string;
  height: string;
  buttonStyle?: string;
  title?: string;
}) => {
  const { isModalOpen, setIsModalOpen } = useModal();

  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 min-h-[100dvh] min-w-[100vw] bg-[#00000070] flex justify-center items-center z-30">
          <CONTENT
            onClose={() => setIsModalOpen(false)}
            title={title}
            width={width}
            height={height}
          >
            {children}
          </CONTENT>
        </div>
      )}
      <button onClick={() => setIsModalOpen(true)} className={buttonStyle}>
        {buttonContent}
      </button>
    </>
  );
};

/**
 *
 * @param { Object } - Expects a children element wich will be the content you want to be shown in the modal, the button content wich will be the content of the button that will open the modal screen, the width and height of the modal, the style of the button wich will open the modal, and an optional title for the modal window
 * @returns A button wich will open a modal screen
 */
const MODAL = ({
  children,
  buttonContent,
  width,
  height,
  buttonStyle,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  buttonContent: JSX.Element | JSX.Element[] | string;
  width: string;
  height: string;
  buttonStyle?: string;
  title?: string;
}) => {
  return (
    <ModalProvider>
      <MODAL_WINDOW
        buttonContent={buttonContent}
        width={width}
        height={height}
        buttonStyle={buttonStyle}
        title={title}
      >
        {children}
      </MODAL_WINDOW>
    </ModalProvider>
  );
};

export default MODAL;
