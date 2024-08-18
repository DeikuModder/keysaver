import useModalProvider from "../providers/useModal";

const useModal = () => {
  const useModalController = useModalProvider();

  const { isModalOpen, setIsModalOpen } = useModalController;

  return {
    isModalOpen,
    setIsModalOpen,
  };
};

export default useModal;
