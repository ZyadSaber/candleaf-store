import { StyledHeader } from "./styled";
import { primaryColors } from "../../constants";

const Header = () => {
  const { primary } = primaryColors;
  return <StyledHeader backgroundColor={primary}></StyledHeader>;
};

export default Header;
