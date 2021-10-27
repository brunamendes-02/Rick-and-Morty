import React from "react";

import '../styles/selected-card.css';

export function SelectedEpisodeCard({episode}) {
    return (
      <div className="selected-card-container">
       <div className="selected-container">
          <div className="main-informations">
            <p className="name">{episode.name}</p>
          </div>
          <p className="locale">{episode.air_date}</p>
          <h1 className="episodes-title">Personagens ({episode.characters.length})</h1>
            {episode.characters.map((character, index) => {
              return  <div className="information-content" key={index}>
                <p>-&nbsp;</p>
                <p>{character.name}</p>
              </div>
            })}
        </div>
      </div>
    )
}