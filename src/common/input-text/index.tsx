import { useCallback } from "react";
import Compact from "antd/es/space/Compact";
import LabelContainer from "../label-container";
import { StyledInput } from "./styled";
import { InputTextProps } from "../../types/input-text";

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
  required,
  addBeforeElement,
  addAfterElement,
  dir,
  ...props
}: InputTextProps) => {

  const handleChange = useCallback(
    (event: { target: { value: string } }) => {
      const {
        target: { value },
      } = event;
      onChange && onChange({ name, value });
    },
    [name, onChange]
  );

  return (
    <LabelContainer
      label={label}
      margin={margin}
      height={height}
      width={width}
      dir={dir}
    >
      <Compact>
        {addBeforeElement && addBeforeElement(value)}
        <StyledInput
          placeholder={placeHolder}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          dir={dir}
          width="100%"
          value={value}
          type={type}
          {...props}
        />
        {addAfterElement && addAfterElement(value)}
      </Compact>
    </LabelContainer>
  );
};

export default InputText;
