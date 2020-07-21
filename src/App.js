import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search";

import "./styles.scss";

const BASE_URL = "https://www.breakingbadapi.com/api";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const results = await fetch(`${BASE_URL}/characters?name=${query}`).then(
        res => res.json()
      );
      setCharacters(results);
      setIsLoading(false);
    })();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search query={query} setQuery={setQuery} />
      <CharacterGrid
        isLoading={isLoading}
        characters={characters}
        resetQuery={() => setQuery("")}
      />
    </div>
  );
}
