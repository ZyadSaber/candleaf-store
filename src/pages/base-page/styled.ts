import styled from "styled-components";

export const StyledSubMenuItem = styled.li`
  &:hover {
    & > ul {
      opacity: 1;
      visibility: visible;
    }
  }
`;
