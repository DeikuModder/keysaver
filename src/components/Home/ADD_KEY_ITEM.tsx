import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MODAL from "../Common/MODAL";
import LABEL from "../Common/LABEL";
import useGeneralProvider from "../../hooks/useGeneralProvider";
import ADD_BTN from "../Common/ADD_BTN";
import { FormEventHandler, useState } from "react";
import { handleInputChange } from "../../utils/handleInputChange";
import { format } from "date-fns";
import { PasswordItem } from "../../type";
import useModal from "../../hooks/useModal";
import SELECT_ICON from "./SELECT_ICON";

const FORM = () => {
  const [newKey, setNewKey] = useState({
    title: "",
    password: "",
    periodicity: "",
    icon: "",
  } as PasswordItem);
  const { setKeysItem, keysItem } = useGeneralProvider();
  const { setIsModalOpen } = useModal();

  const handleAdd: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const date = format(new Date(), "MM/dd/yyyy");

    const newKeyItem = {
      id: crypto.randomUUID(),
      title: newKey.title,
      password: newKey.password,
      periodicity: newKey.periodicity,
      icon: newKey.icon,
      lastModified: date,
    };

    setKeysItem([...keysItem, newKeyItem]);
    setIsModalOpen(false);
  };

  return (
    <form className="p-4 flex flex-col gap-4" onSubmit={handleAdd}>
      <LABEL title="Title" flexDirection="flex-col">
        <input
          value={newKey.title}
          onChange={handleInputChange("title", setNewKey)}
          required
          className="text-black w-full"
        />
      </LABEL>

      <LABEL title="Password" flexDirection="flex-col">
        <input
          value={newKey.password}
          onChange={handleInputChange("password", setNewKey)}
          required
          className="text-black w-full"
        />
      </LABEL>

      <LABEL title="Periodicity" flexDirection="flex-col">
        <select
          value={newKey.periodicity}
          onChange={handleInputChange("periodicity", setNewKey)}
          required
          className="text-black w-full"
        >
          <option value="">Select periodicity</option>
          <option value="very often">Very Often</option>
          <option value="often">Often</option>
          <option value="not so often">Not so often</option>
          <option value="rarely used">Rarely used</option>
          <option value="once a year">Once a year</option>
        </select>
      </LABEL>

      <SELECT_ICON setNewKey={setNewKey} />

      <ADD_BTN type="submit" title="Add" />
    </form>
  );
};

const ADD_KEY_ITEM = () => {
  return (
    <MODAL
      buttonContent={<FontAwesomeIcon icon={faAdd} />}
      buttonStyle="bg-green-500 text-3xl font-bold rounded-lg p-2 transition-color hover:bg-green-600"
      width="w-[300px]"
      height="h-[300px]"
    >
      <FORM />
    </MODAL>
  );
};

export default ADD_KEY_ITEM;
