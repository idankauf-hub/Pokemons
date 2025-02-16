import { useState } from "react";
import { PokemonsList } from "../../components/PokemonsList/PokemonsList";
import { SearchAndFilter } from "../../components/SearchAndFilter/SearchAndFilter";
import { Container, SearchAndListContainer } from "./styles";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <Container>
      <SearchAndListContainer>
        <SearchAndFilter
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onToggleFavoriteFilter={setShowFavorites}
          favoriteFilter={showFavorites}
        />
        <PokemonsList searchValue={searchValue} showFavorites={showFavorites} />
      </SearchAndListContainer>
    </Container>
  );
};
