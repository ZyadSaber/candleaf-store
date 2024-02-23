import styled from "styled-components";
import { primaryColors } from "../../constants";
import {
  FloatingLabelContainerPros,
  FloatingLabelLabelProps,
} from "./interface";

const { inputBorderColor, blue, white } = primaryColors;

export const FloatingLabelContainer = styled.div<FloatingLabelContainerPros>`
  position: relative;
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  *:first-child {
    min-height: 100%;
  }
`;

export const FloatingLabelLabel = styled.label<FloatingLabelLabelProps>`
  position: absolute;
  top: 0.5rem;
  left: 5px;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out,
    font-size 0.2s ease-in-out;
  font-size: 0.8rem;
  color: ${inputBorderColor};

  ${({ hasContent }) =>
    hasContent &&
    `
    transform: translateY(-13px) scale(0.8);
    color: ${blue};
    font-size: 13px;
    background-color: ${white};
  `};
`;
