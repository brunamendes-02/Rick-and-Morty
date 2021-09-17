import React, {useState, useEffect} from "react";
import '../styles/selected-character-card.css';
export function SelectedCharacterCard({character}) {
  const [status, setStatus] = useState();

    useEffect(() => {
      if (character) {
        switch(character.status) {
          case "Alive":
            setStatus('Vivo')
          break;
          case "Dead":
          setStatus('Morto')
          break;
          default:
          setStatus('Desconhecido')
        }
      }
    }, [character]);

    return (
      <div className="selected-character-card-container">
        <img className="profile-picture" src={character.image} alt="character" />
        <div class="episodes-container">
          <div className="main-informations">
            <p className="name">{character.name}</p>
            <p className="status">({status})</p>
          </div>
          <p className="locale">{character.origin.name}</p>
          <h1 className="episodes-title">Episódios ({character.episode.length})</h1>
            {character.episode.map((ep, index) => {
              return <div class="episode">
              <div class="information-content">
                <p>Nome: &nbsp;</p>
                <p>{ep.name}</p>
              </div>
              <div class="information-content">
                <p>Data de lançamento:  &nbsp;</p>
                <p>{ep.air_date}</p>
              </div>
              </div>
            })}
        </div>
      </div>
    )
}