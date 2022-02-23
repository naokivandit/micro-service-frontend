import { api } from "../../services/api";

export const Pokemon = () => {
  const { data } = api.pokemon.usePokemon({
    name: "Bulbasaur"
  });
  console.log(data);
  return "";
};
