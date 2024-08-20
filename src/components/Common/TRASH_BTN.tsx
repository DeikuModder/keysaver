import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TRASH_BTN = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="font-bold text-2xl w-full text-red-500"
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default TRASH_BTN;
