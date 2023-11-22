import { Button, Col, Form, Input, message, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signin, signup } from "../../api/users";
import image from "../../assets/images/logo.png";

type Props = {};

const Signin = (props: Props) => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = async (value: any) => {
    try {
      const { data } = await signin({
        email: value.email,
        password: value.password,
      });
      if (data) {
        localStorage.setItem("username",JSON.stringify(data))
        message.success("Đăng nhập thành công !");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      const e = error as any;
      if (e.response.data === "Incorrect password") {
        message.error("Mật khẩu không chính xác");
      }
      if (e.response.data === "Cannot find user") {
        message.error("Email không tồn tại");
      }
    }
  };
  return (
    <SignupPage>
      <div className="body-form">
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item label="Email" className="username" name="email">
            <Input placeholder="" />
          </Form.Item>{" "}
          <Form.Item
            label="Mật khẩu"
            className="password"
            name="password"
            rules={[
              { required: true, message: "Không được để trống!" },
              {
                min: 6,
                message: "Password tối thiểu 6 kí tự",
              },
            ]}
          >
            <Input.Password placeholder="" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              danger
              className="btn-sm"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="logo-signup">
        <img src={image} alt="" />
      </div>
    </SignupPage>
  );
};

const SignupPage = styled.div`
  width: 800px;
  height: 508px;
  margin: auto;
  display: flex;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-radius: 10px;
  /* align-items: center; */
  .body-form {
    padding: 80px 45px;
    width: 500px;
  }
  .ant-form-item-label > label {
    font-weight: 400;
    font-size: 19px;
    line-height: 16px;
    color: #000000;
  }
  .ant-input {
    width: 410px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #c7c7c7;
    border-radius: 5px;
  }
  .btn-sm {
    width: 410px;
    height: 48px;
    border-radius: 0px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    color: #ffffff;
  }
  .logo-signup {
    width: calc(100% - 500px);
    background: #f8f8f8;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Signin;
