import React from 'react';

import { CharacterCard } from '../components/CharacterCard';

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
      {characters.map(character => (
        <CharacterCard character={character} selectedCharacter={(value) => console.log(value)}/>
      ))}
    </>
  )
}
