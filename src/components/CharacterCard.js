import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  console.log(props);
  const {
    image,
    name,
    species,
    status,
    location,
    origin,
    episode
  } = props.character;
  return (
    <Card>
      <Image src={`${image}`} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{species}</span>
        </Card.Meta>
        <Card.Description>
          <p>Location: {`${location.name}`}</p>
          <p>Origin: {`${origin.name}`}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
}
