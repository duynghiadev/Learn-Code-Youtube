import React, { useEffect, useState } from "react";
import { Form, Input, Radio, Select, message } from "antd";
import { userServ } from "../../../../../api/api";

const UpdateForm = ({ closeUpdateForm, userID, renderUserPage }) => {
  const [user, setUser] = useState(null);

  const [form] = Form.useForm();

  useEffect(() => {
    userServ
      .getUserByID(userID)
      .then((response) => {
        setUser(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  const onFinish = (user) => {
    const processValues = {
      ...user,
      gender: user.gender === "male" ? true : false,
    };

    userServ
      .updateUser(processValues)
      .then((response) => {
        message.success(
          `Người dùng ${response.data.content.name} đã được cập nhật thành công.`
        );
        closeUpdateForm();
        renderUserPage();
      })
      .catch((error) => {
        message.error(error.response.data.content);
      });
  };

  return (
    <div
      className="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
      style={{ marginLeft: 0 }}
    >
      <div
        className="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl"
        role="dialog"
        id="modal"
      >
        <header className="flex justify-end">
          <button
            className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
            aria-label="close"
            onClick={closeUpdateForm}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </header>
        <div className="mt-4 mb-6">
          <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Cập nhật người dùng
          </p>
          {user && (
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <Form.Item
                  name="id"
                  label="Mã người dùng"
                  initialValue={user ? user?.id : ""}
                >
                  <Input name="id" disabled placeholder="Điền tên vào đây..." />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="Tên người dùng"
                  initialValue={user ? user?.name : ""}
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng ghi họ tên!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input name="name" placeholder="Điền tên vào đây..." />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Số điện thoại"
                  initialValue={user ? user?.phone : ""}
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input name="phone" placeholder="Điền  số điện thoại..." />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  initialValue={user?.email}
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập email!",
                    },
                    {
                      type: "email",
                      message: "Không đúng định dạng email!",
                    },
                  ]}
                >
                  <Input placeholder="example@gmail.com" />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Giới tính"
                  initialValue={user?.gender ? "male" : "female"}
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn giới tính!",
                    },
                  ]}
                >
                  <Select placeholder="Chọn giới tính">
                    <Select.Option value="male">Nam</Select.Option>
                    <Select.Option value="female">Nữ</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="birthday"
                  label="Ngày sinh"
                  initialValue={user?.birthday}
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn ngày sinh!",
                    },
                  ]}
                >
                  <Input placeholder="22/02/2022" />
                </Form.Item>
                <Form.Item
                  name="role"
                  label="Chức vụ"
                  initialValue={user?.role}
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn chức vụ!",
                    },
                  ]}
                >
                  <Radio.Group>
                    <Radio name="role" value="ADMIN">
                      Admin
                    </Radio>
                    <Radio name="role" value="USER">
                      User
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <footer className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800 mt-5">
                <button
                  onClick={closeUpdateForm}
                  className="w-full px-5 py-3 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                >
                  Huỷ
                </button>
                <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline-purple">
                  Cập nhật
                </button>
              </footer>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
