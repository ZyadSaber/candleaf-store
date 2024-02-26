import { OnChangeType } from ".";

export interface InputTextProps {
  value?: string;
  name: string;
  label?: string;
  onChange?: OnChangeType;
  disabled?: boolean;
  width?: number | string;
  type?: string;
  placeHolder?: string;
  padding?: number | string;
  margin?: number | string;
  noAuthorization?: boolean;
  required?: boolean;
  height?: number | string;
  addBeforeElement?: (value?: string) => JSX.Element;
  addAfterElement?: (value?: string) => JSX.Element;
  dir?: string;
  onPressEnter?: () => void;
}
