import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
  return (
    <Menu>
      <NavLink to="/">
        <Menu.Item>
          <Icon name="home" />
          Home
        </Menu.Item>
      </NavLink>

      <NavLink to="/characters">
        <Menu.Item>
          <Icon name="group" />
          Characters
        </Menu.Item>
      </NavLink>

      <NavLink to="/locations">
        <Menu.Item>
          <Icon name="map" />
          Locations
        </Menu.Item>
      </NavLink>

      <NavLink to="/episodes">
        <Menu.Item>
          <Icon name="video" />
          Episodes
        </Menu.Item>
      </NavLink>
    </Menu>
  );
}
