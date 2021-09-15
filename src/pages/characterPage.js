import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { getCharacterByName } from '../server/queries'
import {CharacterCard} from '../components/characterCard'
import { SelectedCharacterCard } from "../components/selectedCharacterCard";
import Arrow from '../icon/arrow';
import Search from '../icon/search';

import '../styles/character-page.css';
import { InputBase, Select, MenuItem } from '@material-ui/core';

export function CharacterPage() {
  const [selectedCharter, setSelectedCharter] = useState();
  const [characterName, setCharacterName] = useState('');
  const [filterType, setFilterType] = useState('');
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
        filterByName()
      break;
      case "ep-more":
        filterByEpQuantity('more')
      break;
      case "ep-less":
        filterByEpQuantity('less')
      break;
      default:
        setCharacters(dataCharacterByName?.characters?.results);
        break;
    }
  },[filterType]);

  const handleSearch = () => {
      setNameToSearch(characterName);
  }

  const filterByName = () => {
    const characters = [];
    dataCharacterByName?.characters?.results?.map((character) => {
      characters.push({
        name: character.name,
        episode: character.episode,
        origin: character.origin,
        image: character.image,
      })
    })
    const sortedCharacters = characters.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    setCharacters(sortedCharacters);
  }
  const filterByEpQuantity = (count) => {
    const characters = [];
    dataCharacterByName?.characters?.results?.map((character) => {
      characters.push({
        name: character.name,
        episode: character.episode,
        origin: character.origin,
        image: character.image,
        episodeQuantity: character.episode.length,
      })
    })
    let sortedEoQuantity;
    switch(count) {
      case "more":
        sortedEoQuantity = characters.sort((a,b) => (a.episodeQuantity > b.episodeQuantity) ? -1 : ((b.episodeQuantity > a.episodeQuantity) ? 1 : 0))
      break;
      case "less":
        sortedEoQuantity = characters.sort((a,b) => (a.episodeQuantity > b.episodeQuantity) ? 1 : ((b.episodeQuantity > a.episodeQuantity) ? -1 : 0))
        break;
        default:
          return;
    }
    setCharacters(sortedEoQuantity);
  }

  return (
    <>
        <div className="header">
          <Link className="link" to="/">
          <Arrow className="arrow-home "/>
            <p>Voltar para Home</p>
          </Link>
          <div className="input-search-box">
              <InputBase  
                className="search-input"
                onChange={(event) => setCharacterName(event.target.value)} 
                placeholder="Nome"
                value={characterName}
                inputProps={{ 'aria-label': 'naked' }}
              />
              <button className="search-button" onClick={() => handleSearch()}>
                <Search />
              </button>
          </div>
          <div className="select-search-box">
            <Select
              value={filterType}
              onChange={(event) => setFilterType(event.target.value)}
              label="Ordenar por"
            >
              <MenuItem selected value="clean">Ordenar</MenuItem>
              <MenuItem value="name">Nome</MenuItem>
              <MenuItem value="ep-more">Mais episódios</MenuItem>
              <MenuItem value="ep-less">Menos episódios</MenuItem>
            </Select>
          </div>
        </div>
        {loadingCharacterByName ? <p>loading....</p> : (       
          <div className="page-container">

            <div>
            {characters?.map(character =>
              <CharacterCard selectedCharacter={(value) => setSelectedCharter(value)} character={character} key={character.id} />
            )}
            </div>
            {selectedCharter && <SelectedCharacterCard  character={selectedCharter}/>}
          </div>
        )}
      </>
  );
}
