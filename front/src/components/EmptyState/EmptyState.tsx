import emptyState from "../../assets/ops.png";
import { Container, EmptyStateWrapper } from "./styles";

export const EmptyState = () => {
  return (
    <Container>
      <EmptyStateWrapper src={emptyState} alt="ops..." />
      <p>No Pokemon Found</p>
    </Container>
  );
};
