import { useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer } from "antd";
import { useFormManager } from "../../hooks";
import Flex from "../../common/flex";
import { primaryColors } from "../../constants";
import SearchInputField from "../../common/search-input-field";
import DrawerHeader from "./partials/DrawerHeader";
import DrawerBody from "./partials/DrawerBody";
import { StyledHeader, StyledImage, StyledCart } from "./styled";

const Header = memo(() => {
  const { primary } = primaryColors;
  const navigate = useNavigate();

  const {
    state: { keyWord, visible },
    onChange,
  } = useFormManager({
    initialValues: {
      visible: false,
      keyWord: "",
    },
  });

  const navigateToHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSearch = useCallback(() => {
    navigate(`/products?keyword=${keyWord}`);
  }, [navigate, keyWord]);

  const handleDrawerState = useCallback(
    () =>
      onChange({
        name: "visible",
        value: !visible,
      }),
    [onChange, visible]
  );

  return (
    <>
      <StyledHeader backgroundColor={primary}>
        <SearchInputField
          width="15%"
          onSearch={handleSearch}
          name="keyWord"
          value={keyWord}
          onChange={onChange}
          onPressEnter={handleSearch}
        />
        <StyledImage onClick={navigateToHome} src="/src/imgs/icon.png" alt="" />
        <Flex
          gap="5px"
          wrap
          width="15%"
          height="100%"
          align="center"
          justifyContent="center"
        >
          <StyledCart onClick={handleDrawerState} />
        </Flex>
      </StyledHeader>
      <Drawer
        title="Drawer with extra actions"
        placement="right"
        width={500}
        onClose={handleDrawerState}
        open={visible}
        extra={<DrawerHeader />}
      >
        <DrawerBody />
      </Drawer>
    </>
  );
});

export default Header;
