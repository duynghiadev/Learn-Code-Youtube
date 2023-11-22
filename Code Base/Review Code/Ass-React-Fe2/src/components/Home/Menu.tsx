import { ClockCircleOutlined, HomeOutlined, PhoneOutlined, LaptopOutlined, TabletFilled, AudioOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom'



  const item: MenuProps['items'] = [
    { key: "cellphone", icon: <PhoneOutlined />, label: <Link to="/admin">Điện thoại</Link> },
    { key: "laptop", icon: <LaptopOutlined />, label: "Laptop" },
    { key: "tablet", icon: <TabletFilled />, label: "Máy tính bảng" },
    { key: "audio", icon: <AudioOutlined />, label: "Âm thanh" },
    { key: "watch", icon: <ClockCircleOutlined />, label: "Đồng hồ" },
    { key: "smart-home", icon: <HomeOutlined />, label: "Nhà thông minh" },
    { key: "accessories", icon: <AudioOutlined />, label: "Phụ kiện" },
    { key: "computer", icon: <LaptopOutlined />, label: "PC - Màn hình" },
  ]
  
  const HomeMenu: React.FC = () => (
    <Menu style={{ width: '100%' }} mode="vertical" items={item} />
  );
  
  export default HomeMenu;