import React from 'react';

import { EpisodeCard } from '../components/episode-card';

export default {
  title: 'Components/CardEpisode',
  component: EpisodeCard,
};
const episodes = [
  {
    name: 'Ep 1'
  },
  {
    name: 'Ep 2'
  }
];
export function EpisodeCardStory() {
  return (
    <>
      {episodes.map((episode, index) => (
        <EpisodeCard key={index} episode={episode} selectedEpisode={(value) => console.log(value)}/>
      ))}
    </>
  )
}
