import { ReactNode } from "react";

export interface FloatingLabelContainerPros {
  margin?: number | string;
  height?: number | string;
  width?: number | string;
  direction?: string;
}

export interface floatingLabelProps extends FloatingLabelContainerPros {
  name?: string;
  label?: string;
  children?: ReactNode;
  hidden?: boolean;
  dir?: string;
}
