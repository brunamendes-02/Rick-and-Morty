import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { getAllCharacters } from '../server/queries'
import {CharacterCard} from '../components/characterCard'
import { SelectedCharacterCard } from "../components/selectedCharacterCard";
import Arrow from '../icon/arrow';

import '../styles/character-page.css';
export function CharacterPage() {
  const [selectedCharter, setSelectedCharter] = useState();
  const { loading, error, data } = useQuery(getAllCharacters);

  console.log(selectedCharter);
  return (
    <>
    {loading ? <p>loading....</p> : (
      <>
          <div className="header">
            <Link className="link" to="/">
            <Arrow className="arrow-home "/>
              <p>Voltar para Home</p>
            </Link>
          </div>
        <div className="page-container">
          <div>
          {data?.characters?.results.map(character =>
            <CharacterCard selectedCharacter={(value) => setSelectedCharter(value)} character={character} key={character.id} />
          )}
          </div>
          {selectedCharter && <SelectedCharacterCard  character={selectedCharter}/>}
        </div>
      </>
    )}
    </>
  );
}
