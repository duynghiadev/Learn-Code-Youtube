import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from "antd";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
const { Paragraph } = Typography;
import type { ColumnsType } from "antd/es/table";
import { getAll } from "../../../api/product";
import { getAllCategory } from "../../../api/categories";

interface DataType {
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Ẩn hiện",
    dataIndex: "hidden",
    key: "hidden",
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>
          {" "}
          <DeleteOutlined style={{ color: "red" }} />
        </a>
        <a>
          <Space>
            <EditOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];

const CategoriesAdminPage = () => {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCategory();
        setDataTable(data.data);
      } catch (err) {}
    };

    fetchData();
  }, []);
  
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Category
        </Typography.Title>
        <Link to="/admin/categories/add">
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Breadcrumb>
      <Table columns={columns} dataSource={dataTable} />
    </>
  );
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export default CategoriesAdminPage;
