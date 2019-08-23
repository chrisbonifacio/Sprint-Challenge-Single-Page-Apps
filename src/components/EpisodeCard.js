import React from "react";
import { Card, Icon } from "semantic-ui-react";

const EpisodeCard = props => {
  const { name, air_date, characters } = props.episode;
  return (
    <Card>
      <Card.Content header={`${name}`} />
      <Card.Content description={`${air_date}`} />
      <Card.Content extra>
        <Icon name="user" />4 Friends
      </Card.Content>
    </Card>
  );
};

export default EpisodeCard;
