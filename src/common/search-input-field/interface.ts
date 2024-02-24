import { InputTextProps } from "../../types";

export interface SearchInputFieldProps extends InputTextProps {
  onSearch?: (searchWord?: string) => void;
}
