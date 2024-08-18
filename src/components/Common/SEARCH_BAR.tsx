import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SEARCH_BAR = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <label className=" bg-neutral-600 px-1 rounded-lg">
      <FontAwesomeIcon
        icon={faSearch}
        className=" text-neutral-400 border-r border-slate-500 pr-1"
      />
      <input
        placeholder="Buscar..."
        className="w-fit bg-transparent border-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </label>
  );
};

export default SEARCH_BAR;
