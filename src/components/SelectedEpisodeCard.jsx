import React from "react";
import '../styles/selected-character-card.css';
export function SelectedEpisodeCard({episode}) {
    return (
      <div className="selected-character-card-container">
       <div class="episodes-container">
          <div className="main-informations">
            <p className="name">{episode.name}</p>
          </div>
          <p className="locale">{episode.air_date}</p>
          <h1 className="episodes-title">Personagens ({episode.characters.length})</h1>
            {episode.characters.map((character, index) => {
              return  <div class="information-content">
                <p>-&nbsp;</p>
                <p>{character.name}</p>
              </div>
            })}
        </div>
      </div>
    )
}