import styled from "styled-components";
import { primaryColors } from "../../constants/colors";
import { FloatingLabelContainerPros } from "./interface";

const { inputBorderColor } = primaryColors;

export const StyledLabelContainer = styled.div<FloatingLabelContainerPros>`
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  color: ${inputBorderColor};
  margin: 0 5px;
`;
