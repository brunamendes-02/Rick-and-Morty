import React, {useState, useEffect} from "react";

import '../styles/selected-card.css';

export function SelectedCharacterCard({character}) {
  const [status, setStatus] = useState('');

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
      <div className="selected-card-container">
        <img className="profile-picture" src={character.image} alt={`Imagem do personagem ${character.name}`} />
        <div className="selected-container">
          <div className="main-informations">
            <p className="name">{character.name}</p>
            <p className="status">({status})</p>
          </div>
          <p className="locale">{character.origin.name === 'unknown' ? 'Origem desconhecida' : character.origin.name}</p>
          <h1 className="episodes-title">Episódios ({character.episode.length})</h1>
            {character.episode.map((ep, index) => {
              return <div className="episode" key={index}>
              <div className="information-content">
                <p>Nome: {ep.name}</p>
              </div>
              <div className="information-content">
                <p>Data de lançamento: {ep.air_date}</p>
              </div>
              </div>
            })}
        </div>
      </div>
    )
}