import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeLIst.js";
import LocationsList from "./components/LocationsList.js";

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <CharacterList />
      <EpisodeList />
      <LocationsList />
    </main>
  );
}
