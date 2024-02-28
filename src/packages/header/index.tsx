import { useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useFormManager } from "../../hooks";
import SearchInputField from "../../common/search-input-field";
import Flex from "../../common/flex";
import { primaryColors } from "../../constants";
import DrawerHeader from "./partials/DrawerHeader";
import DrawerBody from "./partials/DrawerBody";
import { StyledHeader, StyledImage, StyledCart, StyledText } from "./styled";
import { items } from "./constants";

const Header = memo(() => {
  const { primary, lightGray } = primaryColors;
  const navigate = useNavigate();

  const isUserLoggedIn = false;

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

  const navigateToSignIn = useCallback(() => {
    navigate("/sign_in");
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

  const headerSidesProps = {
    width: "25%",
    wrap: true,
    justifyContent: "center",
    align: "center",
    height: "100%",
    gap: "20px",
  };

  return (
    <>
      <StyledHeader backgroundColor={primary}>
        <Flex {...headerSidesProps} mobileHidden>
          <SearchInputField
            width="250px"
            onSearch={handleSearch}
            name="keyWord"
            value={keyWord}
            onChange={onChange}
            onPressEnter={handleSearch}
          />
        </Flex>
        <StyledImage onClick={navigateToHome} src="/src/imgs/icon.png" alt="" />
        <Flex
          {...headerSidesProps}
          mobileWidth="auto"
          align="center"
          justifyContent="center"
        >
          <Dropdown
            menu={{ items: isUserLoggedIn ? items : [] }}
            placement="bottom"
          >
            <Flex
              padding="7px 14px"
              width="110PX"
              align="center"
              justifyContent="space-around"
              backgroundColor={lightGray}
              gap="5px"
              mobileWidth="auto"
            >
              <StyledText onClick={!isUserLoggedIn && navigateToSignIn}>
                log in
              </StyledText>
              <UserOutlined />
            </Flex>
          </Dropdown>
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
        <Flex width="100%" desktopHidden>
          <SearchInputField
            width="250px"
            onSearch={handleSearch}
            name="keyWord"
            value={keyWord}
            onChange={onChange}
            onPressEnter={handleSearch}
          />
        </Flex>
        <DrawerBody />
      </Drawer>
    </>
  );
});

export default Header;
