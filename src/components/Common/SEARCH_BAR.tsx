import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGeneralProvider from "../../hooks/useGeneralProvider";

const SEARCH_BAR = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { appTheme } = useGeneralProvider();

  return (
    <label
      className="px-1 rounded-lg"
      style={{
        backgroundColor: appTheme.complementary
          ? appTheme.complementary
          : "#525252",
      }}
    >
      <FontAwesomeIcon
        icon={faSearch}
        className=" text-neutral-400 border-r border-slate-500 pr-1"
      />
      <input
        placeholder="Search..."
        className="w-fit bg-transparent border-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </label>
  );
};

export default SEARCH_BAR;
