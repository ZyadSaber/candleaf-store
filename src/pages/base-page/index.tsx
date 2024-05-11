import { Outlet } from "react-router-dom";
import Header from "./partials/Header"

const BasePage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default BasePage;
