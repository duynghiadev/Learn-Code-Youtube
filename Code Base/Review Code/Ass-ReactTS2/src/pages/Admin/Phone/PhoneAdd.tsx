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
} from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { createPhone } from "../../../api/phone";
import UploadImage from "../../../components/Phone/UploadImage";
import TextArea from "antd/lib/input/TextArea";
import { list } from "../../../api/category";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
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

/* eslint-enable no-template-curly-in-string */
const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const { Option } = Select;

const PhoneAdd: React.FC = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const getCategorys = async () => {
      const { data: cates } = await list();
      setCategorys(cates);
      console.log(cates);
      
    };
    getCategorys();
  }, []);

  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    console.log("Success : ", values);
    if (values.originalPrice <= values.saleOffPrice) {
      message.error("Giá gốc không được nhỏ hơn giá giảm");
    } else if (values.originalPrice > values.saleOffPrice) {
      try {
        const data = await createPhone(values);
        message.success("Tạo mới thành công");
        navigate("/admin/phone");
      } catch (err) {
        message.error("Đã xảy ra lỗi");
      }
    }
  };
    
  const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
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
          <Form.Item name="img" labelCol={{ span: 24 }} label="Ảnh sản phẩm">
            <UploadImage />
          </Form.Item>

          {/* <UploadTest/> */}
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
              <Input size="large" />
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
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="saleOffPrice"
                  label="Giá giảm"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: "Nhập vào số giá sản phẩm", type: "number" },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phân loại"
                  name="categories"
                  rules={[{ required: true }]}
                >
                  <Select style={{ width: "100%" }} size="large">
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
              <TextArea name="feature" />
            </Form.Item>
            <Form.Item
              name="description"
              labelCol={{ span: 24 }}
              label="Mô tả sản phẩm"
              rules={[{ required: true, message: "Mô tả sản phẩm" }]}
            >
              <TextArea name="description" />
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
export default PhoneAdd;
