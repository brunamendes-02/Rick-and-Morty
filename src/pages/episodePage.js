import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { getAllEpisodes } from '../server/queries'
import { EpisodeCard } from "../components/episodeCard";
import { SelectedEpisodeCard } from "../components/selectedEpisodeCard";
import Arrow from '../icon/arrow';

export function EpisodePage() {
  const [selectedEpisode, setSelectedEpisode] = useState();
  const { loading, error, data } = useQuery(getAllEpisodes)
  return (
    <>
    {loading ? <p>loading...</p> : 
    <>
        <div className="header">
          <Link className="link" to="/">
            <Arrow className="arrow-home "/>
              <p>Voltar para Home</p>
          </Link>
        </div>
        <div className="page-container">
          <div>
            {data?.episodes.results.map(episode => {
              return <EpisodeCard selectedEpisode={(value) => setSelectedEpisode(value)} episode={episode} key={episode.id}/>
            })}
          </div>
            {selectedEpisode && <SelectedEpisodeCard episode={selectedEpisode}/>}
        </div>
    </>
    }
    </>
  );
}
