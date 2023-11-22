import {
  ClockCircleOutlined,
  HomeOutlined,
  PhoneOutlined,
  LaptopOutlined,
  TabletFilled,
  AudioOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ThemeContext } from "../../App";

const item: MenuProps["items"] = [
  {
    key: "cellphone",
    icon: <PhoneOutlined />,
    label: <Link to="/admin">Điện thoại</Link>,
  },
  { key: "laptop", icon: <LaptopOutlined />, label: "Laptop" },
  { key: "tablet", icon: <TabletFilled />, label: "Máy tính bảng" },
  { key: "audio", icon: <AudioOutlined />, label: "Âm thanh" },
  { key: "watch", icon: <ClockCircleOutlined />, label: "Đồng hồ" },
  { key: "smart-home", icon: <HomeOutlined />, label: "Nhà thông minh" },
  { key: "accessories", icon: <AudioOutlined />, label: "Phụ kiện" },
  { key: "computer", icon: <LaptopOutlined />, label: "PC - Màn hình" },
];

const HomeMenu: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return <WrapperMenu mode="vertical" items={item} theme={theme} />;
};

const WrapperMenu = styled(Menu)``;

export default HomeMenu;
