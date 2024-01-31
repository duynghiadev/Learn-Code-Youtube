import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readCates } from '../../../../api/category';
import { CategoryType } from '../../../../types/category';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type CategoryEditProps = {
    updateCates: (category: CategoryType) => void
};

type FormInputs = {
    name: string,
    img: string
}

const CategoryEdit = (props: CategoryEditProps) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const navigate = useNavigate();

    useEffect(() => {
        const getCategory = async () => {
            const { data  } = await readCates(id);
            reset(data);
            console.log(data);
        }
        getCategory();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        toastr.success("Sửa danh mục thành công");
        props.updateCates(data);
        // navigate("/admin/category");
    }
    return <div className='p-[10px]'>
        <section className="py-5">
            <div className="container px-5">
                {/* Contact form*/}
                <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Cập nhật danh mục sản phẩm</h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <form onSubmit={handleSubmit(onSubmit)} action="" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                {/* Name input*/}
                                <div className="form-floating mb-3">
                                    <input  {...register('name', { required: true })} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    {errors.name && errors.name.type === "required" && <span>Nhập vào tên sản phẩm</span>}
                                    <label htmlFor="name">Tên danh mục sản phẩm</label>
                                </div>
                                {/* <div className="form-floating mb-3">
                                    <input className="form-control" id="img" type="file" placeholder="" data-sb-validations="required" />
                                    <label htmlFor="img">
                                        <img className="rounded mx-auto d-block" src='' alt="" />
                                    </label>
                                </div> */}
                                <div className="d-grid border border-solid-2 py-2 rounded bg-primary"><button className="" id="submitButton" type="submit">Cập nhập</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
};

export default CategoryEdit