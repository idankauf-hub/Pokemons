import styled from "styled-components";
import theme from "../../styles/thyme";

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: ${theme.colors.background};
  border: 2px solid #000;
  box-shadow: 0px 0px ${theme.spacing.xxl} rgba(0, 0, 0, 0.5);
  border-radius: ${theme.spacing.sm};
  padding: ${theme.spacing.lg};
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h2`
  margin: 0 0 ${theme.spacing.lg} 0;
`;

export const BodyText = styled.p`
  margin: ${theme.spacing.sm} 0;
`;
