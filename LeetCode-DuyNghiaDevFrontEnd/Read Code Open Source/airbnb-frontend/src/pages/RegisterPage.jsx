import { DatePicker, Form, Input, Select, message, ConfigProvider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { userServ } from "../api/api";
import viVN from "antd/locale/vi_VN";

export default function RegisterPage() {
  const [form] = Form.useForm();
  const onFinishFailed = errorInfo => {
    console.error("Failed:", errorInfo);
  };
  const navigate = useNavigate();
  const onFinish = values => {
    const processValues = { ...values, gender: values.gender === "male" ? true : false };
    userServ
      .signup(processValues)
      .then(() => {
        message.success("Đăng ký thành công!");
        navigate("/login");
      })
      .catch(err => {
        message.error(err.response.data.content);
      });
  };
  return (
    <div className="flex flex-col min-h-screen bg-[url('https://demo4.cybersoft.edu.vn/static/media/logo_login.a444f2681cc7b623ead2.jpg')] bg-center bg-cover bg-no-repeat bg-fixed relative">
      <div className='flex flex-1 justify-center items-center'>
        <div className='p-6 m-2 bg-white rounded-lg w-2/3 space-y-3'>
          <div>
            <Link to='/'>
              <img
                alt='logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
                className='w-24 mx-auto'
              />
            </Link>
          </div>
          <h1 className='font-bold text-2xl text-center text-pink-500'>Đăng ký</h1>
          <ConfigProvider locale={viVN}>
            <Form form={form} layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <Form.Item
                  name='name'
                  label='Tên người dùng'
                  tooltip='Họ tên của bạn'
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng ghi họ tên!",
                      whitespace: true,
                    },
                    {
                      pattern: new RegExp(/^[\p{L}\s'-]+$/u),
                      message: "Họ tên nhập chưa đúng!",
                    },
                  ]}
                >
                  <Input placeholder='Điền tên vào đây...' />
                </Form.Item>
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
                  <Input placeholder='example@gmail.com' />
                </Form.Item>
                <Form.Item
                  name='phone'
                  label='Số điện thoại'
                  rules={[
                    {
                      pattern: new RegExp(/^0(?!0)\d{9}$/g),
                      message: "Không đúng định dạng số điện thoại!",
                    },
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại!",
                    },
                  ]}
                >
                  <Input placeholder='0903 123 123' />
                </Form.Item>
                <Form.Item
                  label='Mật khẩu'
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu!",
                    },
                    {
                      min: 6,
                      message: "Mật khẩu phải có tối thiểu 6 kí tự!",
                    },
                  ]}
                >
                  <Input.Password placeholder='********' />
                </Form.Item>
                <Form.Item
                  name='gender'
                  label='Giới tính'
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn giới tính!",
                    },
                  ]}
                >
                  <Select placeholder='Chọn giới tính'>
                    <Select.Option value='male'>Nam</Select.Option>
                    <Select.Option value='female'>Nữ</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name='birthday'
                  label='Ngày sinh'
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn ngày sinh!",
                    },
                  ]}
                >
                  <DatePicker className='w-full' placeholder='Chọn ngày sinh' format='DD-MM-YYYY' />
                </Form.Item>
              </div>
              <div className='mt-9'>
                <button className='cursor-pointer text-white w-full bg-pink-500 hover:bg-pink-700 duration-300 px-6 py-2 rounded-lg'>Đăng ký</button>
              </div>
            </Form>
          </ConfigProvider>
          <p className='text-center'>
            <Link to='/login' className='font-bold text-pink-500 hover:text-pink-700 duration-300'>
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
