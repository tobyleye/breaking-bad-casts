import React from "react";

const Search = ({ query, setQuery }) => {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="search characters"
        autoFocus
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
    </form>
  );
};
export default Search;
