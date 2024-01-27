// pokemon.service.js ------> src/services/pokemon.service.js
// así nos comunicamos con pokeapi.co, es funa función proveniente del módulo ../utils
import { axiosUtil } from "../utils";

export const getByIdPokemon = async (id) => {
  const optionsRequest = {
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  };

  return await axiosUtil(optionsRequest);
};
