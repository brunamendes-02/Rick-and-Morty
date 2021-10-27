import React from "react";
import Arrow from '../assets/icon/arrow';

import '../styles/episode-card.css';

export function EpisodeCard({episode, selectedEpisode}) {
    return (
      <div onClick={() => selectedEpisode(episode)} className="episode-card-container">
        <p>{episode.name}</p>
        <div className="arrow-content">
          <Arrow className="arrow"/>
        </div>
      </div>
    )
}