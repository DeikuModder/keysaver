import { useState } from "react";
import AskToast from "../Toasts/AskToast";
import TRASH_BTN from "./TRASH_BTN";

const DELETE_BTN = ({
  deleteFn,
  message = "Seguro que quiere borrar este producto?",
}: {
  deleteFn: () => void;
  message?: string;
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDelete = () => {
    deleteFn();
  };

  return (
    <>
      <TRASH_BTN onClick={() => setOpenDeleteModal(true)} />
      {openDeleteModal && (
        <div className="absolute top-0 left-0 h-[100dvh] w-full bg-[#00000070] flex justify-center items-center z-30">
          <AskToast
            content={message}
            fn={handleDelete}
            onClose={() => setOpenDeleteModal(false)}
          />
        </div>
      )}
    </>
  );
};

export default DELETE_BTN;
