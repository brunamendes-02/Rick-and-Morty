import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { getEpisodeByName } from '../server/queries'
import { EpisodeCard } from "../components/episodeCard";
import { SelectedEpisodeCard } from "../components/selectedEpisodeCard";
import Arrow from '../icon/arrow';
import Search from '../icon/search';
import { InputBase, Select, MenuItem } from '@material-ui/core';

export function EpisodePage() {
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [episodeName, setEpisodeName] = useState('');
  const [nameToSearch, setNameToSearch] = useState('');
  const [filterType, setFilterType] = useState('');
  const [episodes, setEpisodes] = useState('');

  const { loading: loadingEpisodeByName, data: dataEpisodeByName } = useQuery(getEpisodeByName, {
    variables: {name: nameToSearch},
  });
  useEffect(() => {
    setEpisodes(dataEpisodeByName?.episodes?.results)
  },[dataEpisodeByName]);

  useEffect(() => {
    switch(filterType) {
      case "name":
        filterByName()
      break;
      case "ep-more":
        filterByCharacterQuantity('more')
      break;
      case "ep-less":
        filterByCharacterQuantity('less')
      break;
      default:
        setEpisodes(dataEpisodeByName?.episodes?.results);
        break;
    }
  },[filterType]);

  const handleSearch = () => {
      setNameToSearch(episodeName);
  }
  const filterByName = () => {
    console.log(dataEpisodeByName.episodes.results);
    const episode = [];
    dataEpisodeByName?.episodes?.results?.map((ep) => {
      episode.push({
        name: ep.name,
        air_date: ep.air_date,
        characters: ep.characters,
      })
    })
    const sortEpisode = episode.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    setEpisodes(sortEpisode);
  }
  const filterByCharacterQuantity = (count) => {
    const episode = [];
    dataEpisodeByName?.episodes?.results?.map((ep) => {
      episode.push({
        name: ep.name,
        air_date: ep.air_date,
        characters: ep.characters,
        charactersQuantity: ep.characters.length,
      })
    })
    let sortedEoQuantity;
    switch(count) {
      case "more":
        sortedEoQuantity = episode.sort((a,b) => (a.charactersQuantity > b.charactersQuantity) ? -1 : ((b.charactersQuantity > a.charactersQuantity) ? 1 : 0))
      break;
      case "less":
        sortedEoQuantity = episode.sort((a,b) => (a.charactersQuantity > b.charactersQuantity) ? 1 : ((b.charactersQuantity > a.charactersQuantity) ? -1 : 0))
        break;
        default:
          return;
    }
    setEpisodes(sortedEoQuantity);
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
              onChange={(event) => setEpisodeName(event.target.value)} 
              placeholder="Nome"
              value={episodeName}
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
            <MenuItem value="ep-more">Mais personagens</MenuItem>
            <MenuItem value="ep-less">Menos personagens</MenuItem>
          </Select>
        </div>
      </div>
      {loadingEpisodeByName ? <p>loading...</p> : (
        <div className="page-container">
          <div>
            {episodes?.map(episode => {
              return <EpisodeCard selectedEpisode={(value) => setSelectedEpisode(value)} episode={episode} key={episode.id}/>
            })}
          </div>
            {selectedEpisode && <SelectedEpisodeCard episode={selectedEpisode}/>}
        </div>
      )}
    </>
  );
}
