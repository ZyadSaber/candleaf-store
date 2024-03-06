import { useCallback } from "react";
import Compact from "antd/es/space/Compact";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import LabelContainer from "../label-container";
import { StyledInput, StyledPassword } from "./styled";
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
  labelFontWeight,
  labelFontSize,
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

  const computedProps = {
    disabled,
    placeHolder,
    required,
    onChange: handleChange,
    dir,
    width: "100%",
    value,
    type,
    iconRender: (visible: boolean) =>
      visible ? <EyeOutlined /> : <EyeInvisibleOutlined />,
    ...props,
  };

  return (
    <LabelContainer
      label={label}
      margin={margin}
      height={height}
      width={width}
      dir={dir}
      labelFontWeight={labelFontWeight}
      labelFontSize={labelFontSize}
    >
      <Compact>
        {addBeforeElement && addBeforeElement(value)}
        {type === "password" ? (
          <StyledPassword {...computedProps} />
        ) : (
          <StyledInput {...computedProps} />
        )}
        {addAfterElement && addAfterElement(value)}
      </Compact>
    </LabelContainer>
  );
};

export default InputText;
