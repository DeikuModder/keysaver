import SEARCH_BAR from "../components/Common/SEARCH_BAR";
import ADD_KEY_ITEM from "../components/Home/ADD_KEY_ITEM";
import KEYS_LIST from "../components/Home/KEYS_LIST";
import useDebounceSearch from "../hooks/useDebounceSearch";

const Home = () => {
  const { search, setDebouncedSearch } = useDebounceSearch(500);

  return (
    <section className="min-h-[100dvh] p-8 flex flex-col items-center justify-between">
      <SEARCH_BAR search={search} setSearch={setDebouncedSearch} />
      <KEYS_LIST />
      <div>
        <ADD_KEY_ITEM />
      </div>
    </section>
  );
};

export default Home;
