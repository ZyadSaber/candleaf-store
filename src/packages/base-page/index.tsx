import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Header from "../header";
import Footer from "../footer";

const BasePage = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default BasePage;
