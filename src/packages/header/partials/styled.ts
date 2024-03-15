import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { deviceSizes } from "../../../constants";
import { primaryColors } from "../../../styles";

const { mobile } = deviceSizes;
const { lightGray, light, darkBorderColor, darkShadow, black } = primaryColors;

const menuContainerCss = css`
  position: absolute;
  left: 0;
  display: none;
  width: 130%;

  border-radius: 13px;

  @media ${mobile} {
    position: relative;
    width: 100%;
    left: 0;
    background: ${light};
  }
`;

export const StyledMenuContainer = styled.ul<{
  isDropDown?: boolean;
}>`
  ${({ isDropDown }) =>
    isDropDown &&
    `
    background: ${lightGray};
    box-shadow: 5px 3px 10px ${darkShadow};
  ${menuContainerCss}
  @media ${mobile} {
    background: ${light};
  }
  `}
`;

export const StyledMenuItem = styled.li<{
  isDropDown?: boolean;
}>`
  position: relative;
  list-style: none;
  float: left;

  @media ${mobile} {
    width: 100%;
    padding: 10px 0;
  }

  &:hover {
    & > ${StyledMenuContainer} {
      display: block;
    }
  }

  ${({ isDropDown }) =>
    isDropDown &&
    `
  position: relative;
  width: 100%;
  border-top: 1px solid ${darkBorderColor};
  &:first-child{
    border-top: none;
  }
  `}
`;

export const StyledLink = styled(Link)`
  color: ${black};
  font-size: 1.1em;
  padding: 0px 14px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;

  & b {
    display: none;
  }

  @media ${mobile} {
    & b {
      display: block;
    }
  }

  &:hover {
    color: ${darkBorderColor};
  }
`;
