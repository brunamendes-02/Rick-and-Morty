import React from 'react';

import { SelectedCharacterCard } from '../components/selected-character-card.component';

export default {
  title: 'Components/CardCharacter',
  component: SelectedCharacterCard,
};

const selectedCharacter = {
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick',
    status: 'Alive',
    origin: {
      name: 'Casa do João'
    },
    episode: [
      {
        name: 'Episodio 1',
        air_date: '2 de dezembro'
      },
      {
        name: 'Episodio 2',
        air_date: '3 de dezembro'
      }
    ]
  };

export function SelectedCharacterCardStory() {
  return <SelectedCharacterCard character={selectedCharacter}/>
}