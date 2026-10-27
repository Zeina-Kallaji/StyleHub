import { useState } from "react";
import searchIcon from "../assets/icons/search.svg";
import sortIcon from "../assets/icons/sort.svg";
import "./SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="searchbar-row">
      {/* Search input */}
      <div className="searchbar__input-wrapper">
        <img
          src={searchIcon}
          alt=""
          aria-hidden="true"
          className="searchbar__icon"
        />
        <input
          type="search"
          className="searchbar__input"
          placeholder="Search Salon, Specialist"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search Salon, Specialist"
        />
      </div>

      {/* Sort button */}
      <button
        className="searchbar__sort-btn"
        aria-label="Sort and filter"
        onClick={() => {/* no-op for now */}}
      >
        <img src={sortIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  );
}

export default SearchBar;
