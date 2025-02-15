import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetPokemonsArg,
  PokemonDetails,
  PokemonListResponse,
} from "../types/Pokemon";
import { BASE_API_URL, POKEMON_TAG } from "../constants";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  tagTypes: [POKEMON_TAG],
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonListResponse, GetPokemonsArg>({
      query: ({ limit, offset }) => `pokemons/?limit=${limit}&offset=${offset}`,
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ name }) => ({
                type: "Pokemon" as const,
                id: name,
              })),
              { type: POKEMON_TAG, id: "LIST" },
            ]
          : [{ type: POKEMON_TAG, id: "LIST" }],
    }),
    getPokemonDetails: builder.query<PokemonDetails, string>({
      query: (name) => `pokemons/${name}`,
    }),
    addFavorite: builder.mutation<PokemonDetails, { name: string }>({
      query: ({ name }) => ({
        url: "pokemons",
        method: "POST",
        body: { name },
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: POKEMON_TAG, id: arg.name },
      ],
    }),
    removeFavorite: builder.mutation<void, { name: string }>({
      query: ({ name }) => ({
        url: `pokemons/${name}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: POKEMON_TAG, id: arg.name },
      ],
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useGetPokemonDetailsQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} = pokemonApi;
