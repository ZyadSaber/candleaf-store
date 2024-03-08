import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { AppConfigProvider } from "../app-config-provider";
import Header from "../header";
import Footer from "../footer";

const BasePage = () => {
  return (
    <AppConfigProvider>
      <Layout>
        <Header />
        <Content>{/* <Outlet /> */}</Content>
        {/* <Footer /> */}
      </Layout>
    </AppConfigProvider>
  );
};

export default BasePage;
