import styled from "styled-components";
import { primaryColors } from "../../colors";
import { FloatingLabelContainerPros } from "./interface";

const { primary } = primaryColors;

export const StyledLabelContainer = styled.div<FloatingLabelContainerPros>`
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  gap: 7px;
`;

export const StyledLabel = styled.label<{
  labelFontWeight?: string | number;
  labelFontSize?: string;
}>`
  color: ${primary};
  margin: 0 5px;
  font-weight: ${({ labelFontWeight }) => labelFontWeight};
  font-size: ${({ labelFontSize }) => labelFontSize};
`;
