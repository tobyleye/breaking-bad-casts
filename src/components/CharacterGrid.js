import React from "react";
import CharacterCard from "./CharacterCard";
import Spinner from "./Spinner";

const CharacterGrid = ({ isLoading, characters, resetQuery }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading && !characters.length) {
    return (
      <div className="no-result center">
        We couldn't find what you were looking for <br />
        Perhaps consider{" "}
        <span className="view-all" onClick={resetQuery}>
          viewing all the characters
        </span>
      </div>
    );
  }

  const INTERVAL = 0.22;

  return (
    <ul className="character-grid">
      {characters.map((character, idx) => (
        <li
          key={character.char_id}
          style={{ animationDelay: `${INTERVAL * idx}s` }}
        >
          <CharacterCard {...character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterGrid;
