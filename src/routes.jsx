import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { HomePage } from "./pages/homePage";
import { EpisodePage } from "./pages/episodePage";
import { CharacterPage } from "./pages/characterPage";

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
