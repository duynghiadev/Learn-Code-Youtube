import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space, Image, Modal, Select } from "antd";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
const { Paragraph } = Typography;
import type { ColumnsType } from "antd/es/table";
import { deleteProduct, getAll, getProductCategory } from "../../../api/product";
import { ProductType } from "../../../types/Product";
import { CategoriesType } from "../../../types/Category";
import { getAllCategory } from "../../../api/categories";

interface DataType {
  name: string;
  saleOffPrice: number;
  feature: string;
  description: string;
  descrip: string;
}

const ProductAdminPage = () => {
  //useState 
  const [dataTable, setDataTable] = useState<ProductType[]>([]);
  //
  const [category, setCategory] = useState<CategoriesType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        setDataTable(data.data);
      } catch (err) {}
    };

    fetchData();
  }, []);
  const columns: ColumnsType<ProductType> = [
    { key: "1", title: "ID", dataIndex: "id" },
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
      render: (text: string, record: ProductType) => {
        return <Image width={200} src={text} />;
      },
    },
   
    {
      title: "Giá khuyến mãi",
      dataIndex: "saleOffPrice",
      key: "saleOffPrice",
    },
    {
      title: "Đặc điểm",
      dataIndex: "feature",
      key: "feature",
    },
    
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    
    {
      title: "Action",
      key: "action",
      sorter: true,
      render: (text, record) => (
        <Space size="middle">
          <Link to={`product/edit/${record.id}`}>
            <EditOutlined />
          </Link>
          <a>
            <Space>
              <DeleteOutlined
                style={{ color: "blue" }}
                onClick={() => {
                  onDelete(record.id as string);
                }}
              />
            </Space>
          </a>
        </Space>
      ),
    },
  ];
  console.log(dataTable);

  const onDelete = async (id: string) => {
    console.log(id);

    Modal.confirm({
      title: "Bạn có muốn xóa không?",
      onOk: async () => {
        const { data } = await deleteProduct(id);
        if (data) {
          setDataTable(dataTable.filter((item) => item.id !== id));
         //tao mot mang moi va loai bo id san pham da xoa
        }
      },
    });

    console.log();
  };


  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCategory();
        setCategory(data);
      } catch (error) {}
    };
    getCategory();
  }, []);
  const handlechange = async (value:any) => {
if(value === undefined){
  const { data } = await getAllCategory();
 setDataTable(data);
}else{
  const { data } = await getProductCategory(value);
 setDataTable(data);
}
  };
  const { Option } = Select;
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0}}>
          Điện thoại
        </Typography.Title>
        <Link to="/admin/product/add">
          <h3>Thêm sản phẩm</h3>
        </Link>
      </Breadcrumb>
      <Space >
          <h3>Bộ Lọc :</h3><br/>
          
          <Select
          
            style={{ width: "227%",margin:"15px 67px"}}
            size="large"
            placeholder="Danh mục sản phẩm"
            onChange={handlechange}
            
          >
            {category.map((item, index) => (
              <Option value={item.id} key={index}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Space>
      <Table columns={columns} dataSource={dataTable} />
    </>
  );
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export default ProductAdminPage;