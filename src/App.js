import React, { useState, useEffect } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeLIst.js";
import LocationsList from "./components/LocationsList.js";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import TransitionGroup from "react-transition-group";
import SearchForm from "./components/SearchForm";
import axios from "axios";

export default function App() {
  const [name, setName] = useState("");
  const [searchData, setSearchData] = useState([]);

  const onSearch = name => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(response => {
        setSearchData(response.data.results);
        console.log(searchData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    onSearch(name);
  }, [name]);

  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/locations" component={LocationsList} />
      <Route exact path="/episodes" component={EpisodeList} />
      <SearchForm
        onSearch={onSearch}
        searchData={searchData}
        setSearchData={setSearchData}
        name={name}
        setName={setName}
      />
    </main>
  );
}
