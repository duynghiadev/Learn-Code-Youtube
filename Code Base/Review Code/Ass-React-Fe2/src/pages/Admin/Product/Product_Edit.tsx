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
import UploadImage from "../../../components/Product/UploadImage";
import { createProduct, editProduct, getProductId } from "../../../api/product";
import { useNavigate, useParams } from "react-router-dom";
import Dragger from "antd/lib/upload/Dragger";
import { PlusSquareOutlined } from "@ant-design/icons";
import { UploadProps } from "antd/es/upload";
import { RcFile } from "antd/lib/upload";
import { upload } from "../../../ultis/upload";

const { TextArea } = Input;
const { Option } = Select;

const EditProductPage: React.FC = () => {
  const [product, setProduct] = useState({});
  const [fileList, setfileList] = useState<UploadFile[] | any>([]);
  const { id } = useParams();
  //useParams la lay gia tri id tren duong dan url
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
        const data = await editProduct(valueEdit);
        message.success("Edit thành công");
        navigate(-1);
      } catch (err) {
        message.error("Có lỗi xảy ra");
      }
    }
  }; 
  useEffect(() => {
    const get = async (id: string) => {
      const { data } = await getProductId(id);
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
  console.log(onFinish);
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
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Sửa Sản Phẩm<br/>
        </Typography.Title>
      </Breadcrumb><br/>
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
              <p>Sửa ảnh!</p>
            </Dragger>
          </Form.Item>
          <Form form={form}
            initialValues={product}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            labelCol={{ span: 24 }}>
            <Form.Item label="" name="img" valuePropName="src">
              <Avatar shape="square" size={200} />
            </Form.Item></Form>
        </Col>
        
        <Col span={14}>
          <Typography.Title level={5}>Thông tin sản phẩm</Typography.Title><hr/>
          <Form
            // name="product"
            form={form}
            initialValues={product}
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
                  label="Giá khuyễn mãi"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Giá sản phẩm" }]}
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="Giá khuyến mãi "
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Danh mục sản phẩm"
                  name="categories"
                  rules={[{ required: true }]}
                >
                  <Select
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="Danh mục sản phẩm"
                  >
                    <Option value="phone">Điện thoại</Option>
                    <Option value="laptop">Laptop</Option>
                    <Option value="accessories">
                      Tai nghe
                    </Option>
                    <Option value="tablet">Máy tính</Option>
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



export default EditProductPage;