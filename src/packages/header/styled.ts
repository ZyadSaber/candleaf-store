import styled from "styled-components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { primaryColors } from "../../colors";
import { deviceSizes } from "../../constants";

const { lightGray, darkCharcoal } = primaryColors;
const { mobile } = deviceSizes;

export const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: ${lightGray};

  padding: 20px 0;
  height: auto;
`;

export const DivBlock = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 14;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBrand = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  margin: auto;
  max-width: 900px;
  @media ${mobile} {
    margin: 0 20px;
  }
`;

export const StyledImage = styled.img`
  cursor: pointer;
  width: 80px;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  color: ${darkCharcoal};
`;

export const StyledLogoName = styled.p`
  margin-left: 10px;
`;

export const TopBanner = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 20px 0;
`;

export const StyledCart = styled(ShoppingCartOutlined)`
  font-size: 23px;
  color: ${darkCharcoal};
  cursor: pointer;
  padding-left: 10px;
`;
