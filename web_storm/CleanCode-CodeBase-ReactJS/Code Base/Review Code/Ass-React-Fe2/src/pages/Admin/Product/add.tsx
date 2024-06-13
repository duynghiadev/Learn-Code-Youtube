import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Col,
  Row,
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  UploadFile,
} from "antd";
import UploadImage from "../../../components/Product/UploadImage";
import { createProduct } from "../../../api/product";
import { useNavigate } from "react-router-dom";
import Dragger from "antd/lib/upload/Dragger";
import { PlusSquareOutlined } from "@ant-design/icons";
import { UploadProps } from "antd/es/upload";
import { RcFile } from "antd/lib/upload";
import { upload } from "../../../ultis/upload";
import { getAllCategory } from "../../../api/categories";
import { CategoriesType } from "../../../types/Category";
const { TextArea } = Input;
const { Option } = Select;

const AddProductPage = () => {
  const [fileList, setfileList] = useState<UploadFile[] | any>([]);
  const [category, setCategory] = useState<CategoriesType[]>([]);
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const imgLink = await upload(fileList[0]);
    console.log(imgLink);
    
    const valueAdd = {
      img: imgLink,
      name: values.name,
      saleOffPrice: values.saleOffPrice,
      feature: values.feature,
      description: values.description,
      categoryId: values.categoriesId,
    };
    try {
      const data = await createProduct(valueAdd);
      message.success("Tạo mới thành công");
      navigate(-1);
    } catch (err) {
      message.error("Có lỗi xảy ra");
    }
    handleFile();
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
  const handleFile = () => {
    console.log();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setfileList(newFileList);
    console.log(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Thêm mới
        </Typography.Title>
      </Breadcrumb>
      <Row gutter={16}>
        <Col span={10}>
          <Form.Item
            name="imgfile"
            rules={[{ required: true, message: "Hãy thêm 1 ảnh" }]}
          >
            <Dragger
              listType="picture"
              multiple={false}
              maxCount={1}
              beforeUpload={() => {
                return false;
              }}
              onChange={onChange}
              onPreview={onPreview}
              fileList={fileList}
            >
              <p className="ant-upload-drag-icon">
                <PlusSquareOutlined />
              </p>
              <p>Thêm ảnh!</p>
            </Dragger>
          </Form.Item>
        </Col>
        <Col span={14}>
          <Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
          <Form
            // name="product"
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            labelCol={{ span: 24 }}
          >
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Tên sản phẩm"
              rules={[
                { required: true, message: "Tên sản phẩm không được trống" },
              ]}
            >
              <Input size="large" placeholder="Tên sản phẩm " />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="originalPrice"
                  label="Giá gốc"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Giá sản phẩm" }]}
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="Giá gốc "
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="saleOffPrice"
                  label="Giá giảm"
                  dependencies={["originalPrice"]}
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: "Giá sản phẩm"},
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("originalPrice") <= value) {
                          return Promise.reject(
                            new Error("Giá khuyến mãi phải nhỏ hơn giá gốc ")
                          );
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="Giá giảm "
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Phân loại"
                  name="categoriesId"
                  rules={[{ required: true }]}
                >
                  <Select
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="Phân loại "
                  
                  >
                    {category.map((item, index) => (
                      <Option value={item.id} key={index}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="feature"
              labelCol={{ span: 24 }}
              label="Đặc điểm nổi bật"
              rules={[{ required: true, message: "Đặc điểm sản phẩm" }]}
            >
              <TextArea name="feature" placeholder="Đặc điểm sản phẩm " />
            </Form.Item>
            <Form.Item
              name="description"
              labelCol={{ span: 24 }}
              label="Mô tả sản phẩm"
              rules={[{ required: true, message: "Mô tả sản phẩm" }]}
            >
              <TextArea name="description" placeholder="Mô tả sản phẩm " />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo mới sản phẩm
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Label = styled.div`
  font-size: 13px;
`;

export default AddProductPage;
