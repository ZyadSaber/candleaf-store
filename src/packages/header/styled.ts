import styled from "styled-components";
import {ShoppingCartOutlined} from "@ant-design/icons"
import { Header } from "antd/es/layout/layout";
import {primaryColors} from "../../constants/colors"

const { common} = primaryColors

export const StyledHeader = styled(Header)<{ backgroundColor?: string }>`
  position: sticky;
  background-color: ${({ backgroundColor }) => backgroundColor};
  top: 0;
  z-index: 1;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  line-height: normal;
`;

export const StyledImage = styled.img`
max-height: 100%;
cursor: pointer;
`

export const StyledCart = styled(ShoppingCartOutlined)`
font-size: 30px;
color: ${common};
cursor: pointer;
`
