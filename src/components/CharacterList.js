import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(item => {
        return <CharacterCard key={item.id} character={item} />;
      })}
    </section>
  );
}
