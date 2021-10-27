import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getCharacterByName } from '../server/queries';
import { filterByName } from '../utils/filter-by-name.utils';
import { orderByQuantity } from '../utils/order-by-quantity';

import { CharacterCard } from '../components/character-card.component';
import { SelectedCharacterCard } from "../components/selected-character-card.component";

import Arrow from '../assets/icon/arrow';
import Search from '../assets/icon/search';

import '../styles/character-and-episode-page.css';

export function CharacterPage() {
  const [selectedCharter, setSelectedCharter] = useState();
  const [characterName, setCharacterName] = useState('');
  const [filterType, setFilterType] = useState('clean');
  const [nameToSearch, setNameToSearch] = useState('');
  const [characters, setCharacters] = useState('');
  const { loading: loadingCharacterByName, data: dataCharacterByName } = useQuery(getCharacterByName, {
    variables: {name: nameToSearch},
  });

  useEffect(() => {
    setCharacters(dataCharacterByName?.characters?.results)
  },[dataCharacterByName]);

  useEffect(() => {
    switch(filterType) {
      case "name":
        const sortedCharacters = filterByName(dataCharacterByName?.characters);
        setCharacters(sortedCharacters);
      break;
      case "char-more":
        const orderedMoreCharacters = orderByQuantity('more', dataCharacterByName?.characters, 'episode')
        setCharacters(orderedMoreCharacters);
        break;
      case "char-less":
        const orderedLessCharacters =  orderByQuantity('less', dataCharacterByName?.characters, 'episode')
        setCharacters(orderedLessCharacters);
        break;
      default:
        setCharacters(dataCharacterByName?.characters?.results);
        break;
    }
  },[dataCharacterByName?.characters, filterType]);

  const handleSearch = () => {
      setNameToSearch(characterName);
      setFilterType('clean')
  }


  return (
    <>
      <div className="header">
        <Link className="link" to="/">
        <Arrow className="arrow-home "/>
          <p>Voltar para Home</p>
        </Link>
        <div className="input-search-box">
            <input
              className="search-input"
              onChange={(event) => setCharacterName(event.target.value)} 
              placeholder="Nome"
              value={characterName}
            />
            <button className="search-button" onClick={() => handleSearch()}>
              <Search />
            </button>
        </div>
          <select
            className="select-search"
            value={filterType}
            onChange={(event) => setFilterType(event.target.value)}
            label="Ordenar por"
          >
            <option defaultValue value="clean">Ordenar</option>
            <option value="name">Nome</option>
            <option value="char-more">Mais episódios</option>
            <option value="char-less">Menos episódios</option>
          </select>
        </div>
      {loadingCharacterByName ? (
        <div className="loading-icon-content">
          loading...
        </div>
        ): (       
        <div className="page-container">

          <div>
          {characters?.length && characters?.map((character, index) =>
            <CharacterCard selectedCharacter={(value) => setSelectedCharter(value)} character={character} key={index} />
          )}
          </div>
          {selectedCharter && <SelectedCharacterCard  character={selectedCharter}/>}
        </div>
      )}
    </>
  );
}
