import React from "react";
import Arrow from '../assets/icons/arrow';

import '../styles/character-card.css';

export function CharacterCard({character, selectedCharacter}) {
    return (
      <div onClick={() => selectedCharacter(character)} className="character-card-container">
        <img className="character-profile-picture" src={character.image} alt="character" />
        <p>{character.name}</p>
        <div className="arrow-content">
          <Arrow className="arrow"/>
        </div>
      </div>
    )
}