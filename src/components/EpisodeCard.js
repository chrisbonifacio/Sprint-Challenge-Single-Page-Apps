import React from "react";
import { Card, Icon } from "semantic-ui-react";

const EpisodeCard = props => {
  const { name, air_date, episode, characters } = props.episode;
  return (
    <Card>
      <Card.Content header={`${name}`} />
      <Card.Content>
        <p>Air Date: {air_date}</p>
        <p>Episode: {episode}</p>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Characters
        </a>
      </Card.Content>
    </Card>
  );
};

export default EpisodeCard;
