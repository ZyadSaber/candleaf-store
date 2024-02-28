import styled from "styled-components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { primaryColors } from "../../constants/colors";
import { deviceSizes } from "../../constants";

const { lightGray } = primaryColors;
const { mobile } = deviceSizes;

export const StyledHeader = styled(Header)<{ backgroundColor?: string }>`
  position: sticky;
  background-color: ${({ backgroundColor }) => backgroundColor};
  top: 0;
  z-index: 1;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  line-height: normal;
  height: 7vh;

  @media ${mobile} {
    padding: 0 1rem;
  }
`;

export const StyledImage = styled.img`
  max-height: 100%;
  cursor: pointer;
  padding: 5px 0;
  border-radius: 50%;
`;

export const StyledCart = styled(ShoppingCartOutlined)`
  font-size: 30px;
  color: ${lightGray};
  cursor: pointer;
`;

export const StyledText = styled.p`
  cursor: pointer;
  font-size: 14px;
`;
