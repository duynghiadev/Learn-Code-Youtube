import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../../types/user";
import { signin } from "../../../../api/user";
import { authenticate } from "../../../../untils/localStorage";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type FormValues = {
  email: string,
  password: string
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const [error, setError] = useState()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const { data: user } = await signin(data);
      toastr.success("Đăng nhập thành công");
      authenticate(user, () => navigate("/"));
      window.location.reload();

      // console.log(response.data)
    } catch (error: any) {
      toastr.error(error);
      
    }
  };

  return (
    <div>

      <section className="py-[117px]">
        <div className="container px-5">
          <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Đăng Nhập</h1>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form
                  id="contactForm"
                  onSubmit={handleSubmit(onSubmit)}
                  data-sb-form-api-token="API_TOKEN"
                >
                  <div className="form-floating mb-3">
                    <input
                      {...register("email", { required: true })}
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      {...register("password", { required: true })}
                      className="form-control"
                      id="password"
                      type="password"
                      placeholder="Enter your password..."
                    />
                    <label htmlFor="name">Password</label>
                  </div>
                  <h3>
                    {error}
                  </h3>
                  <div>
                    <Link className="pr-10" to={`/signup`}>
                      Đăng ký tài khoản
                    </Link>
                    <button className="">Đăng Nhập</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
