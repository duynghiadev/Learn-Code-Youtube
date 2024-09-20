import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { userServ } from "../api/api";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/userSlice";
import { userLocalStorage } from "../api/localService";

export default function LoginPage() {
  const [form] = Form.useForm();
  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    userServ
      .login(values)
      .then((res) => {
        const data = {
          ...res.data.content.user,
          token: res.data.content.token,
        };
        dispatch(setLogin({ ...data }));
        userLocalStorage.set({ ...data });
        message.success("Đăng nhập thành công!");
        navigate("/");
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
  return (
    <div className="flex flex-col min-h-screen bg-[url('https://demo4.cybersoft.edu.vn/static/media/logo_login.a444f2681cc7b623ead2.jpg')] bg-center bg-cover bg-no-repeat bg-fixed relative">
      <div className="flex flex-1 justify-center items-center">
        <div className="p-6 m-2 bg-white rounded-lg w-2/3 md:w-1/3 space-y-3">
          <div className="grid grid-cols-1 lg:flex justify-between items-center gap-3">
            <div className="basis-1/4">
              <Link to="/">
                <img
                  alt="logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                  className="w-20 mx-auto lg:mx-0"
                />
              </Link>
            </div>
            <h1 className="font-bold text-2xl text-center text-pink-500 basis-1/2">
              Đăng nhập
            </h1>
            <div className="basis-1/4"></div>
          </div>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
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
              label="Mật khẩu"
              name="password"
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
              <Input.Password />
            </Form.Item>
            <div className="grid lg:flex justify-center items-center gap-3 mt-9">
              <div className="w-full">
                <Link
                  to="/login"
                  className="text-center lg:text-left font-bold text-pink-500 hover:text-pink-700 duration-300"
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <button className="cursor-pointer text-white w-full bg-pink-500 hover:bg-pink-700 duration-300 px-6 py-2 rounded-lg">
                Đăng nhập
              </button>
            </div>
          </Form>
          <p className="text-center">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="font-bold text-pink-500 hover:text-pink-700 duration-300"
            >
              Đăng ký ngay!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
