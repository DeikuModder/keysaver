import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *
 * @param { Object } - Object expects a title, a optional icon for the FontAwesomeIcon component and a optional text color in tailwind css
 * @returns Customized Legend
 */
const LEGEND = ({
  title,
  icon,
  textColor,
}: {
  title: string;
  icon?: IconDefinition;
  textColor?: string;
}) => {
  return (
    <legend className="flex items-center">
      {icon && <FontAwesomeIcon icon={icon} className={`${textColor}`} />}
      <p className={`${textColor} p-1 text-xl font-bold`}>{title}</p>
    </legend>
  );
};

export default LEGEND;
