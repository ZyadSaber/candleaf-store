import { useCallback } from "react";
import FloatingLabel from "../../packages/floating-label";
import { StyledInput } from "./styled";
import { InputTextProps } from "./interface";

const InputText = ({
  disabled,
  value,
  name,
  label = "",
  onChange,
  height,
  width,
  type,
  placeHolder,
  margin,
  className,
  required,
  dir,
  ...props
}: InputTextProps) => {
  const handleChange = useCallback(
    (event: { target: { value: string } }) => {
      const {
        target: { value },
      } = event;
      onChange && onChange({ name: name, value });
    },
    [name, onChange]
  );

  return (
    <FloatingLabel
      label={label}
      hasContent={!!value}
      margin={margin}
      height={height}
      width={width}
    >
      <StyledInput
        dir={dir}
        placeholder={placeHolder}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        width="100%"
        className={className}
        value={value}
        type={type}
        {...props}
      />
    </FloatingLabel>
  );
};

export default InputText;
