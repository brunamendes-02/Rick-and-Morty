import React from "react";
import '../styles/character-card.css';
import Arrow from '../icon/arrow';
export function EpisodeCard({episode, selectedEpisode}) {
    return (
      <div onClick={() => selectedEpisode(episode)} class="episode-card-container">
        <p>{episode.name}</p>
        <div class="arrow-content">
          <Arrow class="arrow"/>
        </div>
      </div>
    )
}