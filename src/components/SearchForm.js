import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({
  onSearch,
  charName,
  setCharName,
  searchChar
}) {
  // STRETCH TODO: Add stateful logic for query/form data

  const handleInputChange = event => {
    setCharName(event.target.value);
    console.log(charName);
  };

  return (
    <>
      <Form onSubmit={() => onSearch(charName)}>
        <Form.Field>
          <label>
            <h3>Search Characters</h3>
            <Form.Input
              onChange={handleInputChange}
              placeholder="name"
              value={charName}
              name="name"
            />
          </label>
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
