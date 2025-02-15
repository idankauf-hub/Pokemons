import { IFavoritePokemon } from "../models/Pokemon";
import pokemonRepository from "../repositories/pokemonRepository";

export const getPaginatedPokemons = async (limit: number, offset: number) => {
  return await pokemonRepository.getPaginated(limit, offset);
};

export const getPokemonDetails = async (name: string) => {
  return await pokemonRepository.getPokemonDetails(name);
};

export const addFavoritePokemon = async (
  name: string
): Promise<IFavoritePokemon> => {
  const exists = await pokemonRepository.findFavoritePokemonByName(name);
  if (exists) {
    throw new Error("This Pokemon is already in favorites");
  }
  return await pokemonRepository.saveFavoritePokemon({ name });
};

export default {
  getPaginatedPokemons,
  getPokemonDetails,
  addFavoritePokemon,
};
