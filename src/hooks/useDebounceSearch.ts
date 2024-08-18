import { useEffect, useState } from "react";

const useDebounceSearch = (milliseconds: number) => {
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setDebouncedSearch(search);
        }, milliseconds); // adjust the delay to your liking (500ms in this example)
    
        return () => {
          clearTimeout(timeoutId);
        };
    }, [search]);

    return {
        search,
        setSearch,
        debouncedSearch,
        setDebouncedSearch
    }
}

export default useDebounceSearch