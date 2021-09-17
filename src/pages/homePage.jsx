import React from "react";
import {Link} from 'react-router-dom';
import '../styles/home.css';
import logo from '../assets/logo.png';
import characters from '../assets/personagens1.png';
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
