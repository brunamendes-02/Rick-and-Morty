import React from "react";
import '../styles/character-card.css';
import Arrow from '../icon/arrow';
export function CharacterCard({character, selectedCharacter}) {
    return (
      <div onClick={() => selectedCharacter(character)} class="character-card-container">
        <img className="character-profile-picture" src={character.image} alt="character" />
        <p>{character.name}</p>
        <div class="arrow-content">
          <Arrow class="arrow"/>
        </div>
      </div>
    )
}