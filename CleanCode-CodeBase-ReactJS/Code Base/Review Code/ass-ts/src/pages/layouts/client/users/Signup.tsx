import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { signup } from '../../../../api/user';
import { UserType } from '../../../../types/user';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type SignupProps = {
  onAdd: (user: UserType) => void
};

type FormValues = {
  name: string,
  email: string,
  phone: string,
  password: string,
  address: string,
  img : string
};

const Signup = (props: SignupProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    signup(data);
    toastr.success("Đăng ký thành công");
    navigate("/signin");
  }
  return (
    <div>
      <section className="py-5">
        <div className="container px-5">
          {/* Contact form*/}
          <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Signup</h1>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form onSubmit={handleSubmit(onSubmit)} action="" id="contactForm" data-sb-form-api-token="API_TOKEN">
                  {/* Name input*/}
                  <div className="form-floating mb-3">
                    <input  {...register('name', { required: true })} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                    {errors.name && errors.name.type === "required" && <span>Nhập vào tên của bạn</span>}
                    <label htmlFor="name">Full name</label>
                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>

                  {/* Email address input*/}
                  <div className="form-floating mb-3">
                    <input {...register('email', { required: true })} className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                    {errors.name && errors.name.type === "required" && <span>Nhập vào email</span>}
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                  </div>

                  <div className="form-floating mb-3">
                    <input {...register('password', { required: true })} className="form-control" id="password" type="password" placeholder="Enter your password..." data-sb-validations="required" />
                    <label htmlFor="name">Password</label>
                    <div className="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
                  </div>

                  {/* Phone number input*/}
                  <div className="form-floating mb-3">
                    <input  {...register('phone', { required: true })} className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                    <label htmlFor="phone">Phone number</label>
                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                  </div>

                  <div className="form-floating mb-3">
                    <input  {...register('address', { required: true })} className="form-control" id="address" type="text" placeholder="Enter your address..." data-sb-validations="required" />
                    <label htmlFor="name">Address</label>
                    <div className="invalid-feedback" data-sb-feedback="address:required">Address is required.</div>
                  </div>

                  <div className="d-grid border border-solid-2 py-2 rounded bg-primary"><button className="" id="submitButton" type="submit">Đăng Ký</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup