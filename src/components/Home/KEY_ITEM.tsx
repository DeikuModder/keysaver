import MODAL from "../Common/MODAL";
import PERIODICITY_TEXT from "./PERIODICITY_TEXT";
import EYE from "../Common/EYE";
import DELETE_BTN from "../Common/DELETE_BTN";
import { PasswordItem } from "../../type";

const KEY_ITEM = ({
  keyItem,
  handleDelete,
}: {
  keyItem: PasswordItem;
  handleDelete: (id: string) => void;
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-4 border-[#9B9B9B] rounded-xl min-w-[280px]">
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold text-white">{keyItem.title}</h2>
        <PERIODICITY_TEXT periodicity={keyItem.periodicity} />
      </div>
      <div className="flex flex-col items-center">
        <MODAL
          buttonContent={<EYE />}
          buttonStyle=""
          width="w-[300px]"
          height="h-[300px]"
        >
          <p>Hello</p>
        </MODAL>
        <DELETE_BTN
          deleteFn={() => handleDelete(keyItem.id!)}
          message="You sure you want to delete this password?"
        />
      </div>
    </div>
  );
};

export default KEY_ITEM;
