import React from "react";
import { render } from "react-dom";
import {
  ApolloProvider,
} from "@apollo/client";

import { client } from "./lib/apollo/client";
import { api } from "./services/api";

const ExchangeRates = () => {
  const { data } = api.pokemon.usePokemon({
    first:10
  })
  console.log(data)
  return ""
}

function App() {
  return (
    <div>
      <h2>My first Apollo app</h2>
      <ExchangeRates />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
