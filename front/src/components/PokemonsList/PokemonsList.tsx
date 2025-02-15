import { useEffect, useState } from "react";
import { MAX_POKEMONS } from "../../constants";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { useGetPokemonsQuery } from "../../services/pokemonApi";
import { Pokemon } from "../../types/Pokemon";
import { Card } from "../Card/Card";
import { ListContainer } from "./styles";
import PokemonDetailsModal from "../PokemonModal/PokemonModal";
import { Loader } from "../Loader/Loader";

export const PokemonsList = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const limit = 10;
  const offset = pageNumber * limit;
  const hasMorePokemons = allPokemons.length < MAX_POKEMONS;

  const { data, isFetching, isLoading } = useGetPokemonsQuery(
    { limit, offset },
    { skip: !hasMorePokemons }
  );

  const lastPokemonElementRef = useInfiniteScroll({
    isFetching,
    hasMore: hasMorePokemons,
    onLoadMore: () => setPageNumber((prev) => prev + 1),
  });

  useEffect(() => {
    if (!data?.results) return;
    setAllPokemons((prev) => [...prev, ...data.results]);
  }, [data]);

  if (isLoading) return <Loader />;
  return (
    <ListContainer>
      {allPokemons?.map((pokemon, index) => {
        if (index === allPokemons.length - 1) {
          return (
            <div ref={lastPokemonElementRef} key={pokemon.url}>
              <Card
                name={pokemon.name}
                onClick={() => setSelectedPokemon(pokemon.name)}
              />
            </div>
          );
        }
        return (
          <Card
            key={pokemon.url}
            name={pokemon.name}
            onClick={() => setSelectedPokemon(pokemon.name)}
          />
        );
      })}
      {isFetching && <Loader />}
      <PokemonDetailsModal
        isOpen={!!selectedPokemon}
        name={selectedPokemon ?? ""}
        onClose={() => setSelectedPokemon(null)}
      />
    </ListContainer>
  );
};
