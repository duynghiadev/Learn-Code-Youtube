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
  Avatar,
} from "antd";
import UploadImage from "../../../components/Phone/UploadImage";
import { createPhone, getAll, readPhone, update } from "../../../api/phone";
import { useNavigate, useParams } from "react-router-dom";
import Dragger from "antd/lib/upload/Dragger";
import { PlusSquareOutlined } from "@ant-design/icons";
import { UploadProps } from "antd/es/upload";
import { RcFile } from "antd/lib/upload";
import { upload } from "../../../Ultils/Upload";

const { TextArea } = Input;
const { Option } = Select;
const validateMessages = {
  required: "${label} is required!",
  minlength: "",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const PhongEdit: React.FC = () => {
  const [product, setProduct] = useState({});
  const [fileList, setfileList] = useState<UploadFile[] | any>([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    const file = fileList[0];
    if (file) {
      values.img = await upload(file);
    }
    const valueEdit = {
      id: id,
      name: values.name,
      originalPrice: values.originalPrice,
      saleOffPrice: values.saleOffPrice,
      feature: values.feature,
      description: values.description,
      img: values.img,
      categoryId: values.categoriesId,
    };
    console.log("Success:", values);
    if (values.originalPrice <= values.saleOffPrice) {
      message.error("Giá gốc không được nhỏ hơn giá giảm");
    } else if (values.originalPrice > values.saleOffPrice) {
      try {
        const data = await update(valueEdit);
        message.success("Edit thành công");
        navigate(-1);
      } catch (err) {
        message.error("Có lỗi xảy ra");
      }
    }
  };
  useEffect(() => {
    const get = async (id: string) => {
      const { data } = await readPhone(id);
      console.log(id);
      console.log(data);
      form.setFieldsValue(data);
    };

    get(id as string);
  }, []);

  const [form] = Form.useForm();
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setfileList(newFileList);
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
    console.log(image);

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
            name="img"
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
            form={form}
            initialValues={product}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            labelCol={{ span: 24 }}
          >
            <Form.Item label="Anh" name="img" valuePropName="src">
              <Avatar shape="square" size={200} />
            </Form.Item>
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
                  rules={[
                    {
                      required: true,
                      message: "Nhập vào số giá sản phẩm",
                      type: "number",
                    },
                  ]}
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
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Nhập vào số giá sản phẩm",
                      type: "number",
                    },
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
                  name="categories"
                  rules={[{ required: true }]}
                >
                  <Select
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="Phân loại "
                  >
                    <Option value="phone">Điện thoại</Option>
                    <Option value="laptop">Laptop</Option>
                    <Option value="accessories" disabled>
                      Phụ kiện
                    </Option>
                    <Option value="tablet">Máy tính bảng</Option>
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
                Edit
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

export default PhongEdit;
