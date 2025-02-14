import pokemonRepository from "../repositories/pokemonRepository";

export const getPaginatedPokemons = async (limit: number, offset: number) => {
  return await pokemonRepository.getPaginated(limit, offset);
};
export default {
  getPaginatedPokemons,
};
