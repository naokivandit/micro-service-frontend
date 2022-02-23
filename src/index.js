import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";

import { client } from "./lib/apollo/client";
import { api } from "./services/api";
import { App } from "./app"

const Pokemon = () => {
  const { data } = api.pokemon.usePokemon({
    name: "Bulbasaur"
  });
  console.log(data);
  return <div></div>;
};

const Pokemons = () => {
  const { data } = api.pokemon.usePokemons({
    first: 10,
  });
  console.log(data);
  return <div></div>;
};

render(
  <ApolloProvider client={client}>
    <App />
    <Pokemon />
    <Pokemons />
  </ApolloProvider>,
  document.getElementById("root")
);
