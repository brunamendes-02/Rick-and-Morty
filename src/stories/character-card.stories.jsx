import React from 'react';

import { CharacterCard } from '../components/character-card.component';

export default {
  title: 'Components/CardCharacter',
  component: CharacterCard,
};
const characters = [
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick'
  },
  {
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Beth'
  }
];
export function CharacterCardStory() {
  return (
    <>
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} selectedCharacter={(value) => console.log(value)}/>
      ))}
    </>
  )
}
