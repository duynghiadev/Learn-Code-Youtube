import React from "react";
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
} from "antd";
import UploadImage from "../../../components/Product/UploadImage";
import { createProduct } from "../../../api/product";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../api/categories";

const { TextArea } = Input;
const { Option } = Select;

const AddCategoriesPage: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    console.log("Success:", values);

   

    try {
      const data = await createCategory(values);
      message.success("Tạo mới thành công");
      navigate(-1);
    } catch (err) {
      message.error("Có lỗi xảy ra");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  console.log(onFinish);

  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Thêm mới
        </Typography.Title>
      </Breadcrumb>
      <Row gutter={16}>
        <Col span={14}>
          
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
              label="Name"
              
              rules={[
                { required: true, message: "Name không được trống" },
              ]}
            >
              <Input size="large" placeholder="Name" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo mới
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

export default AddCategoriesPage;
