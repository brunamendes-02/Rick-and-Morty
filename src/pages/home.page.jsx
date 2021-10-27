import React from "react";
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import characters from '../assets/images/personagens1.png';

import '../styles/home.css';

export function HomePage() {
  return (
    <div className="homeContainer">
      <img className="imageLogo" src={logo} alt="Logo" />
      <div className="homeContent">
      <img className="charactersImage" src={characters} alt="Logo" />
      <div className="buttons">
        <Link className="button" to="/characters">
            Personagens
        </Link>
        <Link className="button" to="/episodes">
            Episódios
        </Link>
      </div>
      </div>
    </div>
  );
}
