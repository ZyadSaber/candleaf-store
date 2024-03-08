import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { primaryColors } from "../../colors";

const { lightGray, secondary } = primaryColors;

export const StyledSearchIcon = styled(SearchOutlined)`
  margin: 0;
  width: 25px;
  background: ${lightGray};
  border-radius: 5px 0 0 5px;
  justify-content: center;
  text-align: center;
  padding: 0;
  cursor: pointer;
  color: ${secondary};
  font-size: 16px;
`;
