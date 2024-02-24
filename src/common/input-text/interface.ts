import { OnChangeType } from "../../types";

export interface InputTextProps {
  value?: string | number;
  name?: string;
  label?: string;
  onChange?: OnChangeType;
  disabled?: boolean;
  width?: number | string;
  type?: string;
  placeHolder?: string;
  padding?: number | string;
  margin?: number | string;
  className?: string;
  noAuthorization?: boolean;
  required?: boolean;
  height?: number | string;
  dir?: "rtl" | "ltr";
}
