import { Modal } from "@mui/material";
import { useGetPokemonDetailsQuery } from "../../services/pokemonApi";
import { Loader } from "../Loader/Loader";
import { PokemonModalBody } from "./PokemonModalBody";
import { ModalContent } from "./styles";

interface PokemonDetailsModalProps {
  name: string;
  onClose: () => void;
  isOpen: boolean;
}

const PokemonDetailsModal = ({
  name,
  onClose,
  isOpen,
}: PokemonDetailsModalProps) => {
  const { data, isError, isFetching } = useGetPokemonDetailsQuery(name);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalContent>
        {isFetching ? (
          <Loader />
        ) : (
          <PokemonModalBody data={data} isError={isError} onClose={onClose} />
        )}
      </ModalContent>
    </Modal>
  );
};

export default PokemonDetailsModal;
