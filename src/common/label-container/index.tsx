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
}: floatingLabelProps) => {
  return (
    <StyledLabelContainer
      width={width}
      height={height}
      margin={margin}
      hidden={hidden}
      dir={dir}
    >
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      {children}
    </StyledLabelContainer>
  );
};
export default LabelContainer;
