import { useCallback } from "react";
import InputText from "../input-text";
import { StyledSearchIcon } from "./styled";
import { SearchInputFieldProps } from "./interface";

const SearchInputField = ({
  onSearch,
  placeHolder = "Search",
  ...props
}: SearchInputFieldProps) => {
  const searchIcon = useCallback(
    (value?: string) => {
      const handleSearch = () => {
        onSearch && onSearch(value);
      };
      return <StyledSearchIcon onClick={handleSearch} />;
    },
    [onSearch]
  );

  return (
    <InputText
      {...props}
      addBeforeElement={searchIcon}
      placeHolder={placeHolder}
      label=""
    />
  );
};

export default SearchInputField;
