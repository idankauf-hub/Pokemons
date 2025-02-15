import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CardContainer, PokemonName } from "./styles";

type CardProps = {
  name: string;
  onClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export const Card = ({
  name,
  onClick,
  isFavorite,
  onToggleFavorite,
}: CardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <PokemonName>{name}</PokemonName>
      {isFavorite ? (
        <FavoriteIcon
          style={{ cursor: "pointer", color: "red" }}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
        />
      ) : (
        <FavoriteBorderIcon
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
        />
      )}
    </CardContainer>
  );
};
