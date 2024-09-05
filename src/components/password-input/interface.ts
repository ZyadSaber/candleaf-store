import { ReactNode } from "react";

export interface PasswordInputProps {
  floatingLabel?: boolean;
  label?: string;
  name: string;
  error?: string;
  placeholder?: string;
  value: string;
  onChange?: any;
  autoFocus?: boolean;
  autoComplete?: string;
  required?: boolean;
  width?: string;
  addOnLabel?: () => ReactNode;
  disabled?: boolean;
}
