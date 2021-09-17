import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { EpisodePage } from "./pages/EpisodePage";
import { CharacterPage } from "./pages/CharacterPage";

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
