import SEARCH_BAR from "../components/Common/SEARCH_BAR";
import useDebounceSearch from "../hooks/useDebounceSearch";

const Home = () => {
  const { search, setDebouncedSearch } = useDebounceSearch(500);

  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center">
      <SEARCH_BAR search={search} setSearch={setDebouncedSearch} />
    </section>
  );
};

export default Home;
