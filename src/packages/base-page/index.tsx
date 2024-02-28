import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import {Content} from "antd/es/layout/layout"
import Header from "../header";
import Footer from "../footer";

const BasePage = () => {
  return (
    <Layout>
      <Header />
      <Content style={{
        height: "88vh",
        maxHeight: "88vh",
      }}>
      <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default BasePage;
