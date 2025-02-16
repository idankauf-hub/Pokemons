export const BASE_API_URL = "http://localhost:5050/api/";
export const MAX_POKEMONS = 150;
export const POKEMON_TAG = "Pokemon";

export enum RTKCacheTags {
  Pokemons = POKEMON_TAG,
}

export const allRTKCacheTags = Object.values(RTKCacheTags);
