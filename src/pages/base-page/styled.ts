import styled, { css } from "styled-components";

export const StyledSubMenuItem = styled.li`
  &:hover {
    & > ul {
      opacity: 1;
      visibility: visible;
      display: flex;
    }
  }
`;

const openMenuCss = css`
  span:nth-child(1) {
    top: 10px;
    transform: rotate(135deg);
  }

  span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  span:nth-child(3) {
    top: 10px;
    transform: rotate(-135deg);
  }
`;

export const StyledMobileMenuIconContainer = styled.div<{
  isOpen?: boolean;
}>`
  ${({ isOpen }) => isOpen && openMenuCss}
`;
