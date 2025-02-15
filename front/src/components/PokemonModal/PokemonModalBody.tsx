import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { PokemonDetails } from "../../types/Pokemon";
import { joinArray } from "../../utils";
import { BodyText, Header, Title } from "./styles";

interface PokemonModalBodyProps {
  data?: PokemonDetails;
  isError: boolean;
  onClose: () => void;
}

export const PokemonModalBody = ({
  data,
  isError,
  onClose,
}: PokemonModalBodyProps) => {
  return (
    <div>
      <Header>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Header>
      {isError ? (
        <BodyText style={{ color: "red" }}>Error loading details</BodyText>
      ) : (
        data && (
          <>
            <Title>{data.name}</Title>
            <img
              src={data.image}
              alt={data.name}
              style={{ width: "100%", height: "auto" }}
            />
            <BodyText>
              <strong>Abilities:</strong> {joinArray(data?.abilitiesNames)}
            </BodyText>
            <BodyText>
              <strong>Types:</strong> {joinArray(data?.typesNames)}
            </BodyText>
            <BodyText>
              <strong>Evolution:</strong> {joinArray(data?.evolutions, " -> ")}
            </BodyText>
          </>
        )
      )}
    </div>
  );
};
