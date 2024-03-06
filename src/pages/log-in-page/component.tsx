import { memo } from "react";
import { NavLink } from "react-router-dom";
import Flex from "../../common/flex";
import InputText from "../../common/input-text";
import { useFormManager } from "../../hooks";
import { primaryColors } from "../../constants/colors";

const LogIn = memo(() => {
  const {
    state: { user_name, password },
    onChange,
  } = useFormManager({
    initialValues: {
      user_name: "",
      password: "",
    },
  });

  const { secondary } = primaryColors;

  return (
    <Flex width="100%" height="100%" justifyContent="center" align="center">
      <Flex
        width="20%"
        wrap
        mobileWidth="80%"
        bordered
        gap="6px"
        flexDirection="column"
        padding="10px"
        borderColor={secondary}
      >
        <Flex width="100%" flexDirection="column" gap="10px" padding="10px">
          <InputText
            name="user_name"
            value={user_name}
            onChange={onChange}
            label="user name"
            type="text"
            labelFontWeight={400}
            labelFontSize="17px"
          />
          <InputText
            name="password"
            value={password}
            onChange={onChange}
            label="password"
            type="password"
            labelFontWeight={400}
            labelFontSize="17px"
          />
        </Flex>
        Do not have an account ?
        <NavLink to="/account/sign_up">create an account</NavLink>
      </Flex>
    </Flex>
  );
});

export default LogIn;
