import styled from "styled-components";
import { Footer } from "antd/es/layout/layout";

export const StyledFooter = styled(Footer)<{ backgroundColor?: string }>`
  text-align: center;
  position: sticky;
  background-color: ${({ backgroundColor }) => backgroundColor};
  bottom: 0;
  z-index: 1;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
`;
