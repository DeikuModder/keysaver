import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MODAL from "../Common/MODAL";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FormEventHandler, useState } from "react";
import LABEL from "../Common/LABEL";
import useGeneralProvider from "../../hooks/useGeneralProvider";
import ADD_BTN from "../Common/ADD_BTN";
import LEGEND from "../Common/LEGEND";
import useModal from "../../hooks/useModal";
import { Link } from "react-router-dom";
import CHECKBOX from "../Common/CHECKBOX";
import themesObj from "../../utils/themes.json";
import GITHUB from "../Icons/GITHUB";

const CONFIG_ABOUT = () => {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Keysaver</h2>
        <h4 className="text-xl font-semibold">v 0.1.1</h4>

        <p>
          Keysaver works completely offline, therefore the only way someone can
          get access to the information you save here is by getting access to
          your pc, be carefult with that
        </p>
      </div>

      <div className="flex items-center gap-8 font-semibold">
        Gabriel Trujillo <span>2024</span>
        <a href="https://github.com/DeikuModder" target="_blank">
          <GITHUB />
        </a>
      </div>
    </div>
  );
};

const CONFIG_THEME = () => {
  const { setAppTheme, appTheme } = useGeneralProvider();

  return (
    <div className="flex flex-col p-4 gap-4">
      <h3 className="font-bold text-xl">Change theme</h3>
      <div className="flex flex-wrap items-center gap-4">
        {Object.keys(themesObj).map((theme) => {
          return (
            <div className="flex flex-col items-center" key={theme}>
              <figure
                className={`${
                  appTheme.name === theme && "border-2 border-red-500"
                } aspect-square rounded-full w-[60px] cursor-pointer`}
                onClick={() =>
                  setAppTheme({ ...themesObj[theme], name: theme })
                }
                style={{ backgroundColor: themesObj[theme].primary }}
              />
              <p>{theme}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CONFIG_USER = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setIsModalOpen } = useModal();
  const {
    userData,
    handleLogin,
    setUserData,
    loginPreferences,
    setLoginPreferences,
  } = useGeneralProvider();

  const handleChangeUsername: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (newUsername) {
      setUserData({ ...userData, username: newUsername });
    }

    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col p-4 gap-4">
      <form
        className="flex flex-col gap-2"
        id="change-username-form"
        onSubmit={handleChangeUsername}
      >
        <LABEL title="Change username" flexDirection="flex-col">
          <input
            className="text-black"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </LABEL>

        <ADD_BTN title="Change" />
      </form>

      <form>
        <LEGEND title="Login preferences" textColor="" />

        <CHECKBOX
          title="Preserve session?"
          checked={loginPreferences.preserveSession}
          onChange={(e) => {
            setUserData({
              ...userData,
              preservedIsAuthenticated: true,
            });

            handleLogin();

            setLoginPreferences({
              ...loginPreferences,
              preserveSession: e.target.checked,
            });
          }}
          className=""
        />

        <CHECKBOX
          title="Login with security questions?"
          checked={loginPreferences.loginWithSecurityQuestions}
          onChange={(e) => {
            setLoginPreferences({
              ...loginPreferences,
              loginWithSecurityQuestions: e.target.checked,
            });
          }}
          className=""
        />
      </form>

      <Link to={"/security-questions-password"}>
        <button className="p-2 text-white text-xl font-bold bg-red-500 rounded-md w-fit hover:bg-red-600">
          Change password
        </button>
      </Link>
    </div>
  );
};

type Tab = "USER" | "THEME" | "ABOUT";

export const CONFIG_MENU = () => {
  const [currentTab, setCurrentTab] = useState<Tab>("USER");
  const { appTheme } = useGeneralProvider();

  return (
    <div className="flex h-full text-base">
      <nav
        className="w-[100px] h-full flex flex-col justify-center items-center font-semibold"
        style={{
          backgroundColor: appTheme.secondary ? appTheme.secondary : "#292929",
        }}
      >
        <ul className="w-full flex flex-col gap-2 text-center">
          <li className="p-1 transition-colors">
            <button onClick={() => setCurrentTab("USER")}>User</button>
          </li>

          <li className="p-1 transition-colors">
            <button onClick={() => setCurrentTab("THEME")}>Theme</button>
          </li>

          <li className="p-1 transition-colors">
            <button onClick={() => setCurrentTab("ABOUT")}>About</button>
          </li>
        </ul>
      </nav>
      <div className="h-full w-full flex overflow-auto">
        {currentTab === "USER" ? (
          <CONFIG_USER />
        ) : currentTab === "THEME" ? (
          <CONFIG_THEME />
        ) : (
          <CONFIG_ABOUT />
        )}
      </div>
    </div>
  );
};

const CONFIG = () => {
  return (
    <MODAL
      buttonContent={<FontAwesomeIcon icon={faGear} />}
      buttonStyle="text-4xl text-neutral-500"
      title="Settings"
      width="w-[300px] sm:w-[350px]"
      height="h-[400px] max-h-[500px]"
    >
      <CONFIG_MENU />
    </MODAL>
  );
};

export default CONFIG;
