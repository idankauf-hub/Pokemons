import { useEffect, useMemo, useState } from "react";
import { LIMIT, MAX_POKEMONS } from "../../constants";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import {
  useAddFavoriteMutation,
  useGetPokemonsQuery,
  useRemoveFavoriteMutation,
} from "../../services/pokemonApi";
import { Pokemon } from "../../types/Pokemon";
import { Card } from "../Card/Card";
import { EmptyState } from "../EmptyState/EmptyState";
import { Loader } from "../Loader/Loader";
import PokemonDetailsModal from "../PokemonModal/PokemonModal";
import { ListContainer } from "./styles";

type PokemonsListProps = {
  searchValue: string;
  showFavorites: boolean;
};
export const PokemonsList = ({
  searchValue,
  showFavorites,
}: PokemonsListProps) => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [localFavorites, setLocalFavorites] = useState<string[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const offset = pageNumber * LIMIT;
  const hasMorePokemons = allPokemons.length < MAX_POKEMONS;

  const { data, isFetching, isLoading } = useGetPokemonsQuery(
    { limit: LIMIT, offset },
    { skip: !hasMorePokemons }
  );
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  const filteredPokemons = useMemo(() => {
    return allPokemons?.filter((pokemon) => {
      const matchesSearch = pokemon.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchesFavorites = showFavorites
        ? localFavorites?.includes(pokemon.name)
        : true;
      return matchesSearch && matchesFavorites;
    });
  }, [allPokemons, searchValue, showFavorites, localFavorites]);

  useEffect(() => {
    if (!data?.results) return;
    setAllPokemons((prev) => {
      const combined = [...prev, ...data.results];
      const uniqueMap = new Map<string, Pokemon>();
      combined.forEach((pokemon) => uniqueMap.set(pokemon.url, pokemon));
      return Array.from(uniqueMap.values());
    });

    const fetchedFavorites = data?.results
      ?.filter((pokemon) => pokemon?.isFavorite)
      ?.map((pokemon) => pokemon?.name);

    setLocalFavorites((prev) =>
      Array.from(new Set([...prev, ...fetchedFavorites]))
    );
  }, [data]);

  const handleToggleFavorite = async (
    pokemonName: string,
    currentlyFavorite: boolean
  ) => {
    try {
      if (!currentlyFavorite) {
        setLocalFavorites((prev) => [...prev, pokemonName]);
        await addFavorite({ name: pokemonName }).unwrap();
      } else {
        setLocalFavorites((prev) =>
          prev.filter((name) => name !== pokemonName)
        );
        await removeFavorite({ name: pokemonName }).unwrap();
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      setLocalFavorites((prev) => prev.filter((name) => name !== pokemonName));
    }
  };

  const lastPokemonElementRef = useInfiniteScroll({
    isFetching,
    hasMore: hasMorePokemons,
    onLoadMore: () => setPageNumber((prev) => prev + 1),
  });

  if (isLoading && pageNumber === 0) return <Loader />;

  return (
    <ListContainer>
      {filteredPokemons?.map((pokemon, index) => {
        const isLast = index === allPokemons.length - 1;
        const isFavorite = localFavorites.includes(pokemon.name);
        return (
          <div
            key={pokemon.url}
            ref={isLast ? lastPokemonElementRef : undefined}
          >
            <Card
              name={pokemon.name}
              isFavorite={isFavorite}
              onClick={() => setSelectedPokemon(pokemon.name)}
              onToggleFavorite={() =>
                handleToggleFavorite(pokemon.name, isFavorite)
              }
            />
          </div>
        );
      })}
      {isFetching && <Loader />}
      {!filteredPokemons?.length && <EmptyState />}
      <PokemonDetailsModal
        isOpen={!!selectedPokemon}
        name={selectedPokemon ?? ""}
        onClose={() => setSelectedPokemon(null)}
      />
    </ListContainer>
  );
};
