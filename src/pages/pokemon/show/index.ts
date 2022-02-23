import { api } from "../../../services/api";

export const Pokemons = () => {
    const { data } = api.pokemon.usePokemons({
      first: 10,
    });
    console.log(data);
    return "";
};