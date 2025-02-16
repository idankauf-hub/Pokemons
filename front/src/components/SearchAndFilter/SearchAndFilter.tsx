import { FormControlLabel, Switch, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { SearchFilterContainer } from "./styles";

type SearchAndFilterProps = {
  searchValue: string;
  onSearchChange: (searchValue: string) => void;
  onToggleFavoriteFilter: (showFavorites: boolean) => void;
  favoriteFilter?: boolean;
};

export const SearchAndFilter = ({
  searchValue,
  onSearchChange,
  onToggleFavoriteFilter,
  favoriteFilter = false,
}: SearchAndFilterProps) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSearchChange(value);
  };

  const handleToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onToggleFavoriteFilter(event.target.checked);
  };

  return (
    <SearchFilterContainer>
      <TextField
        variant="outlined"
        placeholder="Search Pokemon"
        value={searchValue}
        onChange={handleSearchChange}
        size="medium"
      />
      <FormControlLabel
        control={
          <Switch checked={favoriteFilter} onChange={handleToggleChange} />
        }
        label="Favorites"
      />
    </SearchFilterContainer>
  );
};
