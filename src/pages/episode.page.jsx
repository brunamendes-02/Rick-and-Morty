import React, {useState, useEffect, useCallback} from "react";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getEpisodeByName } from '../server/queries';
import { filterByName } from '../utils/filter-by-name.utils';
import { orderByQuantity } from '../utils/order-by-quantity';

import { EpisodeCard } from "../components/episode-card.component";
import { SelectedEpisodeCard } from "../components/selected-episode-card.component";

import Arrow from '../assets/icons/arrow';
import Search from '../assets/icons/search';
import Loader from '../assets/icons/loader';

import '../styles/character-and-episode-page.css';
export function EpisodePage() {
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [episodeName, setEpisodeName] = useState('');
  const [nameToSearch, setNameToSearch] = useState('');
  const [filterType, setFilterType] = useState('clean');
  const [episodes, setEpisodes] = useState([]);

  const { loading: loadingEpisodeByName, data: dataEpisodeByName } = useQuery(getEpisodeByName, {
    variables: {name: nameToSearch},
  });

  useEffect(() => {
    setEpisodes(dataEpisodeByName?.episodes?.results);
  },[dataEpisodeByName]);


  useEffect(() => {
    switch(filterType) {
      case "name":
        const filteredEpisodes = filterByName(dataEpisodeByName?.episodes)
        setEpisodes(filteredEpisodes);
      break;
      case "ep-more":
        const orderedMoreEpisodes = orderByQuantity('more', dataEpisodeByName?.episodes, 'character')
        setEpisodes(orderedMoreEpisodes);
        break;
      case "ep-less":
        const orderedLessEpisodes = orderByQuantity('less', dataEpisodeByName?.episodes, 'character')
        setEpisodes(orderedLessEpisodes);
        break;
      default:
        setEpisodes(dataEpisodeByName?.episodes?.results);
        break;
    }
  }, [dataEpisodeByName?.episodes, filterType]);

  const handleSearch = useCallback(() => {
      setNameToSearch(episodeName);
      setFilterType('clean')
  }, [episodeName])

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
              onChange={(event) => setEpisodeName(event.target.value)} 
              placeholder="Nome"
              value={episodeName}
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
            <option value="ep-more">Mais personagens</option>
            <option value="ep-less">Menos personagens</option>
          </select>
      </div>
      {loadingEpisodeByName ? (
        <div className="loading-icon-content">
          <Loader />
        </div>
        ) : (
        <div className="page-container">
          <div className="episode-page-container-main">
            {episodes?.length > 0 && episodes?.map((episode, index) => {
              return <EpisodeCard selectedEpisode={(value) => setSelectedEpisode(value)} episode={episode} key={index}/>
            })}
          </div>
            {selectedEpisode && <SelectedEpisodeCard episode={selectedEpisode}/>}
        </div>
      )}
    </>
  );
}
