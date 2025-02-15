import { CardContainer, PokemonName } from "./styles";

type CardProps = {
  name: string;
  onClick: () => void;
};

export const Card = ({ name, onClick }: CardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <PokemonName>{name}</PokemonName>
    </CardContainer>
  );
};
