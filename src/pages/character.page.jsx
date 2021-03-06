import React, {useState, useEffect, useCallback} from "react";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getCharacterByName } from '../server/queries';
import { orderByQuantity } from '../utils/order-by-quantity';

import { CharacterCard } from '../components/character-card.component';
import { SelectedCharacterCard } from "../components/selected-character-card.component";

import Arrow from '../assets/icons/arrow';
import Search from '../assets/icons/search';
import Loader from '../assets/icons/loader';

import '../styles/character-and-episode-page.css';

export function CharacterPage() {
  const [selectedCharter, setSelectedCharter] = useState();
  const [characterName, setCharacterName] = useState('');
  const [orderType, setOrderType] = useState('clean');
  const [nameToSearch, setNameToSearch] = useState('');
  const [characters, setCharacters] = useState([]);
  const { loading: loadingCharacterByName, data: dataCharacterByName } = useQuery(getCharacterByName, {
    variables: {name: nameToSearch},
  });

  useEffect(() => {
    setCharacters(dataCharacterByName?.characters?.results)
  },[dataCharacterByName]);

  useEffect(() => {
    switch(orderType) {
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
  },[dataCharacterByName?.characters, orderType]);

  const handleSearch = useCallback(() => {
      setNameToSearch(characterName);
      setOrderType('clean')
  }, [characterName])


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
            value={orderType}
            onChange={(event) => setOrderType(event.target.value)}
            label="Ordenar por"
          >
            <option defaultValue value="clean">Ordenar</option>
            <option value="char-more">Mais epis??dios</option>
            <option value="char-less">Menos epis??dios</option>
          </select>
        </div>
      {loadingCharacterByName ? (
        <div className="loading-icon-content">
           <Loader />
        </div>
        ): (       
        <div className="page-container">

          <div className="character-page-container-main" style={{width: '40%'}}>
          {characters?.length > 0 && characters?.map((character, index) =>
            <CharacterCard selectedCharacter={(value) => setSelectedCharter(value)} character={character} key={index} />
          )}
          </div>
          {selectedCharter && <SelectedCharacterCard  character={selectedCharter}/>}
        </div>
      )}
    </>
  );
}
