import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MODAL from "../Common/MODAL";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type Tab = "USER" | "THEME" | "ABOUT";

export const CONFIG_MENU = () => {
  const [currentTab, setCurrentTab] = useState<Tab>("USER");

  return (
    <div className="flex h-full text-base text-black">
      <nav className="w-[100px] h-full flex flex-col justify-center items-center text-white font-semibold">
        <ul className="w-full flex flex-col gap-2 text-center">
          <li className="p-1 transition-colors hover:bg-neutral-700">
            <button onClick={() => setCurrentTab("USER")}>User</button>
          </li>

          <li className="p-1 transition-colors hover:bg-neutral-700">
            <button onClick={() => setCurrentTab("THEME")}>Theme</button>
          </li>

          <li className="p-1 transition-colors hover:bg-neutral-700">
            <button onClick={() => setCurrentTab("ABOUT")}>About</button>
          </li>
        </ul>
      </nav>
      <div className="h-full w-full flex overflow-auto">
        {currentTab === "USER" ? (
          <div></div>
        ) : currentTab === "THEME" ? (
          <div></div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

const CONFIG = () => {
  return (
    <MODAL
      buttonContent={<FontAwesomeIcon icon={faGear} />}
      buttonStyle="text-4xl text-neutral-400"
      title="Settings"
      width="w-[300px] sm:w-[350px]"
      height="h-[400px] max-h-[500px]"
    >
      <CONFIG_MENU />
    </MODAL>
  );
};

export default CONFIG;
