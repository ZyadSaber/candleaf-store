import { FloatingLabelContainer, FloatingLabelLabel } from "./styled";
import { floatingLabelProps } from "./interface";

const FloatingLabel = ({
  hasContent,
  name,
  label,
  height,
  width,
  margin,
  children,
  hidden,
}: floatingLabelProps) => {
  return (
    <FloatingLabelContainer
      width={width}
      height={height}
      margin={margin}
      hidden={hidden}
    >
      {children}
      <FloatingLabelLabel htmlFor={name} hasContent={hasContent}>
        {label}
      </FloatingLabelLabel>
    </FloatingLabelContainer>
  );
};
export default FloatingLabel;
