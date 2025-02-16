import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  allRTKCacheTags,
  BASE_API_URL,
  RTKCacheTags
} from "../constants";
import {
  GetPokemonsArg,
  PokemonDetails,
  PokemonListResponse,
} from "../types/Pokemon";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  tagTypes: allRTKCacheTags,
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonListResponse, GetPokemonsArg>({
      query: ({ limit, offset }) => `pokemons/?limit=${limit}&offset=${offset}`,
      providesTags: [RTKCacheTags.Pokemons],
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
      invalidatesTags: [RTKCacheTags.Pokemons],
    }),
    removeFavorite: builder.mutation<void, { name: string }>({
      query: ({ name }) => ({
        url: `pokemons/${name}`,
        method: "DELETE",
      }),
      invalidatesTags: [RTKCacheTags.Pokemons],
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useGetPokemonDetailsQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} = pokemonApi;
