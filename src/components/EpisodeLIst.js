import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="episode-list grid-view">
      {episodes.map(episode => {
        return <EpisodeCard key={episode.id} episode={episode} />;
      })}
    </div>
  );
}
