import { StyledFlex } from "./styled";
import { flexProps } from "./interface";

const Flex = ({
  children,
  justifyContent,
  width,
  height,
  padding,
  margin,
  bordered = false,
  backgroundColor,
  borderRadius = "5px",
  flexDirection = "row",
  align,
  hidden = false,
  gap,
  wrap,
  minHeight,
  ...prop
}: flexProps) => {
  return (
    <StyledFlex
      width={width}
      height={height}
      minHeight={minHeight}
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      flexDirection={flexDirection}
      align={align}
      justifyContent={justifyContent}
      hidden={hidden}
      wrap={wrap}
      bordered={bordered}
      gap={gap}
      {...prop}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
