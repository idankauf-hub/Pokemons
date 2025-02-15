import pokemonRepository from "../repositories/pokemonRepository";

export const getPaginatedPokemons = async (limit: number, offset: number) => {
  return await pokemonRepository.getPaginated(limit, offset);
};

export const getPokemonDetails = async (name: string) => {
  return await pokemonRepository.getPokemonDetails(name);
};

export default {
  getPaginatedPokemons,
  getPokemonDetails,
};
