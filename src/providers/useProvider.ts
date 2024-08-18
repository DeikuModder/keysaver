import { useContext } from "react";
import { DataContext } from "./GeneralProvider";

const useProvider = () => {
  return useContext(DataContext);
};

export default useProvider;
