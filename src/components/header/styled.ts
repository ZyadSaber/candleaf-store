import styled from "@emotion/styled";

export const StyledMobileMenuIconContainer = styled.div<{
  isOpen?: boolean;
}>`
  ${({ isOpen }) =>
    isOpen &&
    ` span:nth-child(1) {
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
  }`}
`;
