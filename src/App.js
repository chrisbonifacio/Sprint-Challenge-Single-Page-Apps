import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeLIst.js";
import LocationsList from "./components/LocationsList.js";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/locations" component={LocationsList} />
      <Route exact path="/episodes" component={EpisodeList} />
    </main>
  );
}
