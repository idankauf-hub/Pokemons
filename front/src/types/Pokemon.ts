export interface Pokemon {
  name: string;
  url: string;
}

export interface GetPokemonsArg {
  limit: number;
  offset: number;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonDetails {
  name: string;
  image: string;
  abilitiesNames: string[];
  typesNames: string[];
  evolutions: string[];
}
