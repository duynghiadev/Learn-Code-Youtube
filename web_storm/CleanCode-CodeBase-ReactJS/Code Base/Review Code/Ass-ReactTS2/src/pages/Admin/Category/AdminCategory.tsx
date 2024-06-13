import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Switch, Modal } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { list } from "../../../api/category";

interface DataType {
  id: number;
  key: string;
  name: string;
  title : string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "#",
  },
  {
    title: "Tên danh mục",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tiêu đề danh mục",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Ẩn/Hiện",
    dataIndex: "",
    key: "",
    render: () => <Switch />,
  },
  {
    title: "Thao tác",
    dataIndex: "",
    key: "",
    render: (_, record) => (
      <>
        <Link to={`/admin/category/edit/${record.id}`}>
          <EditOutlined />
        </Link>
        <button style={{ color: "red" }} className="">
          <DeleteOutlined
            style={{ color: "red" }}
          />
        </button>
      </>
    ),
  },
];

const AdminCategory = () => {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await list();
        console.log(data);
        setDataTable(data.data);
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Danh mục sản phẩm
        </Typography.Title>
        <Link
          to="/admin/category/add"
          style={{
            fontSize: "30px",
            color: "blue",
            border: "1px solid",
            borderRadius: "10px",
            padding: "5px",
            marginRight: "300px",
          }}
        >
          Thêm mới
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
  margin-bottom: 10px;
`;
const Imgtable = styled.img`
  max-width: 100px;
  height: auto;
`;

export default AdminCategory;
