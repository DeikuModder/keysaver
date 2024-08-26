import LABEL from "./LABEL";
import "./checkbox.css";

const CHECKBOX = ({
  title,
  checked,
  onChange,
  className,
}: {
  title?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}) => {
  return (
    <LABEL title={title} flexDirection={`flex-col checkbox ${className}`}>
      <div className="bg-neutral-800 rounded-sm w-[40px] flex flex-col">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkbox-icon" />
      </div>
    </LABEL>
  );
};

export default CHECKBOX;
