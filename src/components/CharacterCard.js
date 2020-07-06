import React from "react";
import CharacterImg from "./CharacterImg";

const CharacterCard = ({
  name,
  img,
  portrayed,
  birthday,
  status,
  nickname
}) => {
  return (
    <div className="card">
      <div className="card-side card-side--front">
        <CharacterImg src={img} alt={name} />
      </div>
      <div className="card-side card-side--back">
        <h3>{portrayed}</h3>
        <div>
          <p>
            <strong>Actor Name: </strong>
            {name}
          </p>
          <p>
            <strong>Nick Name: </strong>
            {nickname}
          </p>
          <p>
            <strong>Birthday: </strong>
            {birthday}
          </p>
          <p>
            <strong>Status: </strong>
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
