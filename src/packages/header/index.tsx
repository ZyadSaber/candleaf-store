import { useCallback, useState } from "react";
import {useNavigate} from "react-router-dom";
import {Drawer} from "antd"
import Flex from "../../common/flex"
import { primaryColors } from "../../constants";
import SearchInputField from "../../common/search-input-field";
import { StyledHeader, StyledImage, StyledCart } from "./styled";

const Header = () => {
  const { primary } = primaryColors;
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false)

  const navigateToHome = useCallback(()=>{
    navigate("/")
  },[navigate]);

  const handleSearch = useCallback((keyWord?: string)=>{
    navigate(`/home?keyword=${keyWord}`)
  },[navigate]);

  const handleDrawerState = useCallback(()=>setVisible(!visible),[visible])

  return (
    <>
    <StyledHeader backgroundColor={primary}>
      <SearchInputField name="test" width="15%" onSearch={handleSearch} />
      <StyledImage onClick={navigateToHome} src="/src/imgs/icon.png" alt="" />
      <Flex gap="5px" wrap width="15%" height="100%" align="center" justifyContent="center">
      < StyledCart onClick={handleDrawerState}/>
      </Flex>
    </StyledHeader>
    <Drawer
        title="Drawer with extra actions"
        placement="right"
        width={500}
        onClose={handleDrawerState}
        open={visible}
        extra={
          <>
            <button >Cancel</button>
            <button >
              OK
            </button>
          </>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Header;
