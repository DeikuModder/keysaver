import SEARCH_BAR from "../components/Common/SEARCH_BAR";
import ADD_KEY_ITEM from "../components/Home/ADD_KEY_ITEM";
import CONFIG from "../components/Home/CONFIG";
import KEYS_LIST from "../components/Home/KEYS_LIST";
import LOGOUT from "../components/Home/LOGOUT";
import useDebounceSearch from "../hooks/useDebounceSearch";

const Home = () => {
  const { search, setSearch, debouncedSearch } = useDebounceSearch(500);

  return (
    <section className="h-[100dvh] w-full p-2 flex flex-col items-center justify-between">
      <SEARCH_BAR search={search} setSearch={setSearch} />
      <KEYS_LIST debounceSearch={debouncedSearch} />
      <div className="flex items-center w-full justify-between">
        <CONFIG />
        <ADD_KEY_ITEM />
        <LOGOUT />
      </div>
    </section>
  );
};

export default Home;
