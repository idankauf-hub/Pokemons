import { CardContainer, PokemonName } from "./styles";

type CardProps = {
  name: string;
};

export const Card = ({ name }: CardProps) => {
  return (
    <CardContainer>
      <PokemonName>{name}</PokemonName>
    </CardContainer>
  );
};
