type button = "submit" | "reset" | "button";

const ADD_BTN = ({
  title = "Agregar",
  type,
  form,
  onClick,
}: {
  title?: string;
  type?: button;
  form?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type={type}
      form={form}
      onClick={onClick}
      className="p-2 text-xl font-bold bg-green-500 rounded-md text-white w-fit hover:bg-green-600"
    >
      {title}
    </button>
  );
};

export default ADD_BTN;
