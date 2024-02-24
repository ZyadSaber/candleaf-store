import { primaryColors } from "../../constants";
import SearchInputField from "../../common/search-input-field";
import { StyledHeader } from "./styled";

const Header = () => {
  const { primary } = primaryColors;
  return (
    <StyledHeader backgroundColor={primary}>
      <SearchInputField name="test" label="dd" />
    </StyledHeader>
  );
};

export default Header;
