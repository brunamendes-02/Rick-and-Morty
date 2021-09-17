import React from 'react';

import { EpisodeCard } from '../components/EpisodeCard';

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
      {episodes.map(episode => (
        <EpisodeCard episode={episode} selectedEpisode={(value) => console.log(value)}/>
      ))}
    </>
  )
}
