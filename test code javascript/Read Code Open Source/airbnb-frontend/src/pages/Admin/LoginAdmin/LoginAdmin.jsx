import React, { useEffect } from "react";
import { Form, Input, message } from "antd";
import { userServ } from "../../../api/api";
import { setLoginAdmin } from "../../../redux/userSlice";
import { userAdminLocalStorage } from "../../../api/localService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Airbnb - Admin - Đăng nhập";
  }, []);

  const onFinishFailed = errorInfo => {
    console.error("Failed:", errorInfo);
  };

  const onFinish = values => {
    userServ
      .login(values)
      .then(res => {
        const data = {
          ...res.data.content.user,
          avatar: res.data.content.user.avatar
            ? res.data.content.user.avatar
            : `https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg`,
          token: res.data.content.token,
        };
        if (data.role !== "ADMIN") {
          message.error("Tài khoản người dùng KHÔNG có quyền truy cập vào trang quản trị");
          return null;
        }

        dispatch(setLoginAdmin({ ...data }));
        userAdminLocalStorage.set({ ...data });
        message.success("Đăng nhập thành công!");
        navigate("/admin");
      })
      .catch(err => {
        message.error(err.response.data.content);
      });
  };

  return (
    <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
      <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
        <div className='flex flex-col overflow-y-auto md:flex-row'>
          <div className='h-32 md:h-auto md:w-1/2'>
            <img aria-hidden='true' className='object-cover w-full h-full dark:hidden' src='/images/login-office.jpeg' alt='Office' />
            <img aria-hidden='true' className='hidden object-cover w-full h-full dark:block' src='/images/login-office-dark.jpeg' alt='Office' />
          </div>
          <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <div className='w-full'>
              <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>Login</h1>
              <Form form={form} layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
                <Form.Item
                  label='Email'
                  name='email'
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
                  <Input />
                </Form.Item>
                <Form.Item
                  label='Mật khẩu'
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <div className='grid lg:flex justify-center items-center gap-3'>
                  <button className='cursor-pointer text-white w-full bg-primary hover:bg-primary-dark duration-300 px-6 py-2 rounded-lg'>
                    Đăng nhập
                  </button>
                </div>
              </Form>

              <hr className='my-8' />

              <button className='flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray'>
                <svg className='w-4 h-4 mr-2' aria-hidden='true' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                </svg>
                Github
              </button>
              <button className='flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray'>
                <svg className='w-4 h-4 mr-2' aria-hidden='true' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z' />
                </svg>
                Twitter
              </button>

              <p className='mt-4'>
                <a className='text-sm font-medium text-primary dark:text-primary hover:underline' href='./forgot-password'>
                  Forgot your password?
                </a>
              </p>
              <p className='mt-1'>
                <a className='text-sm font-medium text-primary dark:text-primary hover:underline' href='./register'>
                  Create account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
