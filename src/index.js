import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";

import { client } from "./lib/apollo/client";
import { App } from "./app"

import { Pokemon } from "./pages/pokemon"
import { Pokemons } from "./pages/pokemon/show"


render(
  <ApolloProvider client={client}>
    <App />
    <Pokemon />
    <Pokemons />
  </ApolloProvider>,
  document.getElementById("root")
);
