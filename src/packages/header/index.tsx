import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, Badge } from "antd";
import {
  PhoneOutlined,
  MessageOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Flex from "../../common/flex";
import { useFormManager } from "../../hooks";
import SearchInputField from "../../common/search-input-field";
import { useSelectAppProvider } from "../app-config-provider";
import DrawerHeader from "./partials/DrawerHeader";
import DrawerBody from "./partials/DrawerBody";
import {
  StyledHeader,
  HeaderContainer,
  DivBlock,
  StyledBrand,
  StyledImage,
  StyledLogoName,
  TopBanner,
  StyledCart,
} from "./styled";
import Menu from "./partials/Menu";
import { iconFlexProps } from "./constants";

const Header = memo(() => {
  const navigate = useNavigate();

  const {
    state: { authorization, display_name },
  } = useSelectAppProvider();

  const { state, onChange } = useFormManager({
    initialValues: {
      drawerVisible: false,
      mobileMenu: false,
      keyWord: "",
    },
  });

  const { keyWord, drawerVisible, mobileMenu } = state;

  const handleDrawerState = useCallback(
    (type: string) => () =>
      onChange({
        name: type,
        value: !state[type],
      }),
    [onChange, state]
  );

  const handleSearch = useCallback(() => {
    navigate(`/products?keyword=${keyWord}`);
  }, [navigate, keyWord]);

  const navigateToSignIn = useCallback(() => {
    navigate(authorization ? "/account" : "/account/log_in");
  }, [authorization, navigate]);

  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <DivBlock>
            <StyledBrand>
              <StyledImage src="/src/imgs/logo.png" />
              <StyledLogoName>The Store</StyledLogoName>
            </StyledBrand>
            <TopBanner>
              <Flex {...iconFlexProps} mobileHidden>
                <PhoneOutlined />
                <p>+1-800-800-00</p>
              </Flex>
              <Flex {...iconFlexProps} mobileHidden>
                <MessageOutlined />
                <p>zyad.2002.best@gmail.com</p>
              </Flex>
              <Badge count={2}>
                <StyledCart onClick={handleDrawerState("drawerVisible")} />
              </Badge>
              <Flex
                padding="7px 14px"
                width="110PX"
                align="center"
                justifyContent="space-around"
                gap="5px"
                mobileWidth="auto"
                onClick={navigateToSignIn}
                cursor="pointer"
              >
                <StyledLogoName>
                  {authorization ? display_name : "log in"}
                </StyledLogoName>
                <UserOutlined />
              </Flex>
            </TopBanner>
          </DivBlock>
          <Flex
            width="100%"
            justifyContent="center"
            align="center"
            gap="20px"
            mobileHidden
            style={{}}
          >
            <Menu />
          </Flex>
          <Flex
            width="100%"
            justifyContent="center"
            align="center"
            desktopHidden
          >
            <MenuOutlined onClick={handleDrawerState("mobileMenu")} />
          </Flex>
        </HeaderContainer>
        <Drawer
          title="Drawer with extra actions"
          placement="right"
          width={500}
          onClose={handleDrawerState("drawerVisible")}
          open={drawerVisible}
          extra={<DrawerHeader />}
        >
          <DrawerBody />
        </Drawer>
      </StyledHeader>
      <Drawer
        title="Basic Drawer"
        placement="top"
        onClose={handleDrawerState("mobileMenu")}
        open={mobileMenu}
        height="100%"
        destroyOnClose
      >
        <Flex width="100%" desktopHidden flexDirection="column" gap="15px">
          <Flex width="100%">
            <SearchInputField
              width="100%"
              onSearch={handleSearch}
              name="keyWord"
              value={keyWord}
              onChange={onChange}
              onPressEnter={handleSearch}
            />
          </Flex>
          <Menu />
        </Flex>
      </Drawer>
    </>
  );
});

export default Header;
