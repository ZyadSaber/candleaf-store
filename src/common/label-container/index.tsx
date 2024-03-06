import { StyledLabelContainer, StyledLabel } from "./styled";
import { floatingLabelProps } from "./interface";

const LabelContainer = ({
  name,
  label,
  height,
  width,
  margin,
  children,
  hidden,
  dir,
  labelFontWeight,
  labelFontSize,
}: floatingLabelProps) => {
  return (
    <StyledLabelContainer
      width={width}
      height={height}
      margin={margin}
      hidden={hidden}
      dir={dir}
    >
      {label && (
        <StyledLabel
          labelFontSize={labelFontSize}
          labelFontWeight={labelFontWeight}
          htmlFor={name}
        >
          {label}
        </StyledLabel>
      )}
      {children}
    </StyledLabelContainer>
  );
};
export default LabelContainer;
