import styled from "styled-components";
import { Header } from "antd/es/layout/layout";

export const StyledHeader = styled(Header)<{ backgroundColor?: string }>`
  position: sticky;
  background-color: ${({ backgroundColor }) => backgroundColor};
  top: 0;
  z-index: 1;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
`;
