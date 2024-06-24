import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Switch, Modal } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;
import type { ColumnsType } from "antd/es/table";
import { getAll, remove } from "../../../api/phone";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface DataType {
  id: number;
  key: string;
  name: string;
  saleOffPrice: number;
  feature: string;
  description: string;
  originalPrice: string;
  img: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "#",
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Ảnh sản phẩm",
    dataIndex: "img",
    key: "img",
    render: (_, record) => (
      <>
        <Imgtable src={record.img} alt="" />
      </>
    ),
  },
  {
    title: "Đặc điểm",
    dataIndex: "feature",
    key: "feature",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Giá khuyến mãi",
    dataIndex: "saleOffPrice",
    key: "saleOffPrice",
  },
  {
    title: "Giá cũ",
    dataIndex: "originalPrice",
    key: "saloriginalPriceeOffPrice",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
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
        <Link to={`/admin/phone/edit/${record.id}`}>
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

const AdminPhone = () => {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        setDataTable(data.data);
      } catch (err) {}
    };

    fetchData();
  }, []);
  const onRemoveItem = async (id: string) => {
    console.log(id);

    Modal.confirm({
      title: "Bạn có muốn xóa không?",
      onOk: async () => {
        const { data } = await remove(id);
        if (data) {
          setDataTable(dataTable.filter((item) => item.id !== id));
        }
      },
    });

    console.log();
  };
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Điện thoại
        </Typography.Title>
        <Link
          to="/admin/phone/add"
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

export default AdminPhone;
