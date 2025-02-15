import Pokemon, { IFavoritePokemon } from "../models/Pokemon";
import pokemonRepository from "../repositories/pokemonRepository";

export const getPaginatedPokemons = async (limit: number, offset: number) => {
  const [data, favorites] = await Promise.all([
    pokemonRepository.getPaginated(limit, offset),
    Pokemon.find({}, "name").lean(),
  ]);

  const favoriteNames = new Set(
    favorites?.map((favorite) => favorite?.name.toLowerCase())
  );

  const resultsWithIsFavorite = data?.results?.map((pokemon: any) => ({
    ...pokemon,
    isFavorite: favoriteNames.has(pokemon.name.toLowerCase()),
  }));

  return { ...data, results: resultsWithIsFavorite };
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

export const deleteFavoritePokemon = async (name: string): Promise<void> => {
  await pokemonRepository.deleteFavoritePokemonByName(name);
};

export default {
  getPaginatedPokemons,
  getPokemonDetails,
  addFavoritePokemon,
  deleteFavoritePokemon,
};
