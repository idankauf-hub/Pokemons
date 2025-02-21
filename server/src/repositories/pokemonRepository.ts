import axios from "axios";
import { GET_POKEMON_SPECIES_API, GET_POKEMONS_API } from "../constans";
import {
  EvolutionChainLink,
  PokemonAbilityData,
  PokemonDetails,
  PokemonTypeData,
} from "../Types/pokemons.types";
import { extractEvolution } from "../utils/pokemonsUtils";
import FavoritePokemon, { IFavoritePokemon } from "../models/Pokemon";

export const getPaginated = async (limit: number, offset: number) => {
  const response = await axios.get(GET_POKEMONS_API, {
    params: { limit, offset },
  });
  return response.data;
};

export const getPokemonDetails = async (
  pokemonName: string
): Promise<PokemonDetails> => {
  const [pokemonResponse, speciesResponse] = await Promise.all([
    axios.get(`${GET_POKEMONS_API}/${pokemonName}`),
    axios.get(`${GET_POKEMON_SPECIES_API}/${pokemonName}`),
  ]);

  const { name, abilities, types, sprites } = pokemonResponse?.data || {};
  const speciesData = speciesResponse?.data;

  const image: string =
    sprites?.other?.["official-artwork"]?.front_default || "";

  const abilitiesNames: string[] =
    abilities?.map((ability: PokemonAbilityData) => ability?.ability?.name) ||
    [];

  const typesNames: string[] =
    types?.map((type: PokemonTypeData) => type?.type?.name) || [];

  const evolutionChainUrl: string = speciesData?.evolution_chain?.url;
  let evolutions: string[] = [];
  if (evolutionChainUrl) {
    const { data: evolutionData } = await axios.get(evolutionChainUrl);
    evolutions = extractEvolution(evolutionData?.chain);
  }

  return { name, image, abilitiesNames, typesNames, evolutions };
};

export const findFavoritePokemonByName = async (
  name: string
): Promise<IFavoritePokemon | null> => {
  return await FavoritePokemon.findOne({ name });
};

export const saveFavoritePokemon = async (pokemon: {
  name: string;
}): Promise<IFavoritePokemon> => {
  const newFavorite = new FavoritePokemon(pokemon);
  return await newFavorite.save();
};

export const deleteFavoritePokemonByName = async (
  name: string
): Promise<void> => {
  const result = await FavoritePokemon.deleteOne({ name });
  if (result.deletedCount === 0) {
    throw new Error("Favorite Pokemon not found");
  }
};

export default {
  getPaginated,
  getPokemonDetails,
  saveFavoritePokemon,
  findFavoritePokemonByName,
  deleteFavoritePokemonByName,
};
