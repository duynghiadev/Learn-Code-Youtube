import { useState, useMemo } from "react";
import SearchIcon from "../icons/SearchIcon";
import { searchUsername } from "../services/users";
import { useDebounce } from "../hooks/useDebounce";
import SearchResult from "./SearchResult";

function SearchUsername() {
  const [search, setSearch] = useState("");
  const searchValue = useDebounce(search, 250);
  const results = useMemo(() => searchUsername(searchValue), [searchValue]);
  // const results = searchUsername(search)

  return (
    <div className="container">
      <div className="search-container">
        <label className="search-input" htmlFor="username">
          <SearchIcon />
          <input
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            id="username"
            placeholder="Search ..."
          />
        </label>

        {search && results.length ? <SearchResult data={results} /> : null}
      </div>
    </div>
  );
}

export default SearchUsername;
