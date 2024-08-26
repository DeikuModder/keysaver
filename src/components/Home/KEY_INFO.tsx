import { PasswordItem } from "../../type";
import ICON from "./ICON";
import PERIODICITY_TEXT from "./PERIODICITY_TEXT";

const KEY_INFO = ({ keyItem }: { keyItem: PasswordItem }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-2">
        <ICON iconName={keyItem.icon} />

        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">{keyItem.title}</h2>
          <PERIODICITY_TEXT periodicity={keyItem.periodicity} />
        </div>
      </div>

      <div className="text-xl font-semibold">
        <h3>Password</h3>
        <p className="font-normal">{keyItem.password}</p>
      </div>

      <div className="text-xl font-semibold mt-8">
        <h3>Last modified</h3>
        <p className="font-normal">{keyItem.lastModified}</p>
      </div>
    </div>
  );
};

export default KEY_INFO;
