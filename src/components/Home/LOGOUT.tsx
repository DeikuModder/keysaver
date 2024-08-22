import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGeneralProvider from "../../hooks/useGeneralProvider";

const LOGOUT = () => {
  const { handleLogout } = useGeneralProvider();

  return (
    <button
      className="text-4xl text-neutral-300 font-bold"
      onClick={handleLogout}
    >
      <FontAwesomeIcon icon={faSignOut} />
    </button>
  );
};

export default LOGOUT;
