import { Card } from "../../components/Card/Card";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index} />
      ))}
    </Container>
  );
};
