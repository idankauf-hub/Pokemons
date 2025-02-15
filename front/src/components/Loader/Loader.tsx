import pokeball from "../../assets/pokeball.png";
import { LoaderContainer, SpinnerWrapper } from "./styles";

export const Loader = () => {
  return (
    <LoaderContainer>
      <SpinnerWrapper src={pokeball} alt="Loading..." />
    </LoaderContainer>
  );
};
