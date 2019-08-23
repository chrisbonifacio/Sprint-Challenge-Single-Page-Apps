import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <Card.Content header={name} />
      <Card.Content>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
      </Card.Content>
      <Card.Content extra>
        <a href="/">
          <Icon name="user" />
          Residents
        </a>
      </Card.Content>
    </Card>
  );
}
