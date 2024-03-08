import styled from "styled-components";
import { primaryColors } from "../../colors";
import { deviceSizes } from "../../constants";

const { darkCharcoal, darkBorderColor } = primaryColors;
const { mobile, desktop } = deviceSizes;

export const StyledLink = styled.a`
  font-size: 15px;
  border: none;
  background-color: transparent;
  color: ${darkCharcoal};
  width: auto;

  @media ${desktop} {
    &:hover {
      font-size: 15px;
      font-weight: 600;
      color: ${darkBorderColor};
    }
  }

  @media ${mobile} {
    font-size: 23px;
    font-weight: 400;
  }
`;
