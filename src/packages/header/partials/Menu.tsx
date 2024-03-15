import { memo } from "react";
import { StyledMenuContainer, StyledMenuItem, StyledLink } from "./styled";

const Menu = memo(() => {
  // const menuItem = [
  //   {
  //     key: 1,
  //     name: "Home",
  //     link: "/home",
  //   },
  //   {
  //     key: 2,
  //     name: "Products",
  //     tree: [
  //       {
  //         key: 1,
  //         name: "T-shirts",
  //         link: "/tShirts",
  //       },
  //       {
  //         key: 2,
  //         name: "Jeans",
  //         link: "/jeans",
  //       },
  //     ],
  //   },
  // ];

  return (
    <nav>
      <StyledMenuContainer>
        <StyledMenuItem>
          <StyledLink to="/home">Home</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="/home">
            Products <b>+</b>
          </StyledLink>
          <StyledMenuContainer isDropDown>
            <StyledMenuItem isDropDown>
              <StyledLink to="/about">product1</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem isDropDown>
              <StyledLink to="/about">product2</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem isDropDown>
              <StyledLink to="/about">product3</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem isDropDown>
              <StyledLink to="/about">product4</StyledLink>
            </StyledMenuItem>
          </StyledMenuContainer>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="/about">About</StyledLink>
        </StyledMenuItem>
      </StyledMenuContainer>
    </nav>
  );
});

export default Menu;
