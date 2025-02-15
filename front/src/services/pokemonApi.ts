import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetPokemonsArg, PokemonListResponse } from "../types/Pokemon";
import { BASE_API_URL } from "../constants";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonListResponse, GetPokemonsArg>({
      query: ({ limit, offset }) => `pokemons/?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApi;
