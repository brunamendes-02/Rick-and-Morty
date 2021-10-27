import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { HomePage } from "./pages/home.page";
import { EpisodePage } from "./pages/episode.page";
import { CharacterPage } from "./pages/character.page";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/episodes" exact component={EpisodePage} />
      <Route path="/characters" exact component={CharacterPage} />
    </BrowserRouter>
  );
}

export default Routes;
