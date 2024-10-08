import { useState } from "react";
import { PasswordItem } from "../../type";
import IconsObj from "../Icons";
import ICON from "./ICON";
import useGeneralProvider from "../../hooks/useGeneralProvider";

const keysToStrings = Object.keys(IconsObj);

const SELECT_ICON = ({
  setNewKey,
}: {
  setNewKey: React.Dispatch<React.SetStateAction<PasswordItem>>;
}) => {
  const [iconName, setIconName] = useState("");
  const { appTheme } = useGeneralProvider();

  const handleAdd = (name: string) => {
    setNewKey((prev) => ({ ...prev, icon: name }));
  };

  return (
    <div className="flex gap-2">
      <ICON iconName={iconName} />
      <details>
        <div
          className="max-w-[170px] p-2 rounded-xl flex justify-center items-center gap-4 flex-wrap"
          style={{
            backgroundColor: appTheme.secondary
              ? appTheme.secondary
              : "#adadad",
          }}
        >
          {keysToStrings.map((icon, index) => {
            return (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIconName(keysToStrings[index]);
                  handleAdd(keysToStrings[index]);
                }}
                key={`${icon}-${index}`}
              >
                {IconsObj[icon]()}
              </button>
            );
          })}
        </div>
        <summary aria-label="Select" />
      </details>
    </div>
  );
};

export default SELECT_ICON;
