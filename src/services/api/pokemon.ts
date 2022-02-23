import {
  GetPokemonDocument,
  GetPokemonQueryVariables,
  GetPokemonsDocument,
  GetPokemonsQueryVariables,
} from "../../lib/apollo/generated/graphql";

import {
    useQuery,
} from "@apollo/client";

export const usePokemon = (variables:GetPokemonQueryVariables) => {
  return useQuery(GetPokemonDocument, {
    variables
  })
}

export const usePokemons = (variables:GetPokemonsQueryVariables) => {
  return useQuery(GetPokemonsDocument, {
    variables
  })
}