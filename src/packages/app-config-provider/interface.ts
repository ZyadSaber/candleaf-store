import { ReactNode } from "react";
import { RecordWithAnyType } from "../../types";

export interface AppConfigProviderProps {
  children?: ReactNode;
}

export interface initialValuesType extends RecordWithAnyType {
  authorization?: string;
  display_name?: string;
  build_number?: string;
  sideBlock?: number;
  sideCollapsible?: boolean;
  user_name?: string;
}
