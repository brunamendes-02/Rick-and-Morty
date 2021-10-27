import React from 'react';

import { SelectedEpisodeCard } from '../components/selected-episode-card.component';

export default {
  title: 'Components/CardEpisode',
  component: SelectedEpisodeCard,
};
const selectedEpisodes = {
    name: 'Ep 1',
    air_date: '2 Setembro',
    characters: [
      {
        name: 'Rick',
      },
      {
        name: 'Morty',
      }
    ]
  };

export function SelectedEpisodeCardStory() {
  return  <SelectedEpisodeCard episode={selectedEpisodes}/>
}
