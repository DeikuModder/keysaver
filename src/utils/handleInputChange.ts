import { ChangeEvent } from "react";

export const handleInputChange = <T>(
  field: string,
  setData: React.Dispatch<React.SetStateAction<T>>
) => {
  return (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };
};

export const handleInputParseIntChange = <T>(
  field: string,
  setData: React.Dispatch<React.SetStateAction<T>>
) => {
  return (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: parseInt(e.target.value),
    }));
  };
};
