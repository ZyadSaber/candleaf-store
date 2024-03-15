import styled from "styled-components";
import { Footer } from "antd/es/layout/layout";
import { primaryColors } from "../../styles";

const { lightGray } = primaryColors;

export const StyledFooter = styled(Footer)`
  text-align: center;
  position: sticky;
  background-color: ${lightGray};
  bottom: 0;
  z-index: 1;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 5vh;
`;
