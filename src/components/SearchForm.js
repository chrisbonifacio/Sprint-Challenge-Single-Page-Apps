import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({
  onSearch,
  name,
  setName,
  searchData,
  setSearchData
}) {
  // STRETCH TODO: Add stateful logic for query/form data

  const handleInputChange = event => {
    setName(event.target.value);
    console.log(name);
  };

  return (
    <>
      <Form onSubmit={() => onSearch()}>
        <Form.Field>
          <label>
            <h3>Search Characters</h3>
            <Form.Input
              onChange={handleInputChange}
              placeholder="name"
              value={searchData.name}
              name="name"
            />
          </label>
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      <div className="grid-view">
        {searchData.map(item => {
          return <CharacterCard key={item.id} character={item} />;
        })}
      </div>
    </>
  );
}
