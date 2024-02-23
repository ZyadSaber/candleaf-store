import { ReactNode } from "react";

export interface FloatingLabelContainerPros {
  margin?: number | string;
  height?: number | string;
  width?: number | string;
}

export interface FloatingLabelLabelProps {
  hasContent?: boolean;
}

export interface floatingLabelProps
  extends FloatingLabelLabelProps,
    FloatingLabelContainerPros {
  name?: string;
  label?: string;
  disabled?: boolean;
  type?: string;
  placeHolder?: string;
  className?: string;
  noAuthorization?: boolean;
  required?: boolean;
  children?: ReactNode;
  hidden?: boolean;
}
