import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  PhoneOutlined,
  TabletOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../../assets/images/logo.png";
import InputSearch from "../Input/Search";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items3: MenuProps["items"] = [
  {
    key: "Điện Thoại",
    icon: <PhoneOutlined />,
    label: <Link to="/admin/phone">Điện thoại</Link>,
  },
  {
    key: "Laptop",
    icon: <LaptopOutlined />,
    label: <Link to="/admin/laptop">Laptop</Link>,
  },
  {
    key: "Máy tính bảng",
    icon: <TabletOutlined />,
    label: <Link to="/admin/tabcomputer">Máy tính bảng</Link>,
  },
  {
    key: "Danh mục",
    icon: <UnorderedListOutlined />,
    label: <Link to="/admin/category">Danh mục</Link>,
  },
];
const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
  };
});

const App: React.FC = () => (
  <Container>
    <Layout>
      <HeaderCustom>
        <div style={{ display: "flex", margin: "0px 100px 0px 40px" }}>
          <Logo src={logoImage} />
          <p style={{ margin: "auto", paddingLeft: "5px" }}>Dashboard</p>
        </div>
        <InputSearch />
        <h3 style={{ color: "white", margin: "auto" }}>
          Xin Chào Nguyễn Đắc Phương
        </h3>
      </HeaderCustom>

      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items3}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </Container>
);
const Logo = styled.img`
  width: 57px;
  height: auto;
`;

const HeaderCustom = styled.div`
  width: 1530px;
  height: 64px;
  background-color: #00b0d7;
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  color: white;
`;
const Container = styled.div`
  max-width: 1530px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export default App;
