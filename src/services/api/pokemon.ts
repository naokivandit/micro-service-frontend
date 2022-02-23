import {
  GetPokemonsDocument,
  GetPokemonsQueryVariables,
} from "../../lib/apollo/generated/graphql";

import {
    useQuery,
} from "@apollo/client";

export const usePokemon = (variables:GetPokemonsQueryVariables) => {
  return useQuery(GetPokemonsDocument, {
    variables
  })
}