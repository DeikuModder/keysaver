import React, { useState } from "react";

export const ModalContext = React.createContext(
  {} as ReturnType<typeof useModalController>
);

const useModalController = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return {
    isModalOpen,
    setIsModalOpen,
  };
};

const ModalProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <ModalContext.Provider value={useModalController()}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
