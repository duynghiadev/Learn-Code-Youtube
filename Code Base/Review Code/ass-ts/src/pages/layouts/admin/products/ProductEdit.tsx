import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { listCates } from '../../../../api/category';
import { read, update } from '../../../../api/product';
import { CategoryType } from '../../../../types/category';
import { ProductType } from '../../../../types/product';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

type ProductEditProps = {
    cates : CategoryType[],
    onUpdate: (product: ProductType) => void
};
type FormInputs = {
    name: string,
    img: string,
    price: number,
    title: string,
    category : string
}

const ProductEdit = (props: ProductEditProps) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const navigate = useNavigate();

    const [categorys, setCategorys] = useState<CategoryType[]>([]);
    useEffect(() => {
      const getCategorys = async () => {
        const { data: cates } = await listCates();
        setCategorys(cates);
      };
      getCategorys();
    }, []);


    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = async data => {

        const file = data.img[0];
        const CLOUDINARY_PRESET_KEY = "ppusewr6";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dqhtmst8q/image/upload";
        if(file){
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET_KEY);
            const response = await axios.post(CLOUDINARY_API_URL, formData, {
            headers: {
                "Content-Type": "application/form-data"
            },
            });
        data.img = response.data.url;
        }
        props.onUpdate(data);
        toastr.success("Sửa sản phẩm thành công")
        navigate("/admin/product");
    };  
    return (
        <div className='p-[10px]'>
            <section className="py-5">
                <div className="container px-5">
                    {/* Contact form*/}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">Cập nhật sản phẩm</h1>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form onSubmit={handleSubmit(onSubmit)} action="" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/* Name input*/}
                                    <div className="form-floating mb-3">
                                        <input  {...register('name', { required: true })} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        {errors.name && errors.name.type === "required" && <span>Nhập vào tên sản phẩm</span>}
                                        <label htmlFor="name">Tên sản phẩm</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input  {...register('price', { required: true })} className="form-control" id="price" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        {errors.name && errors.name.type === "required" && <span>Nhập vào giá sản phẩm</span>}
                                        <label htmlFor="name">Giá sản phẩm</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input  {...register('title', { required: true })} className="form-control" id="title" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        {errors.name && errors.name.type === "required" && <span>Nhập vào mô tả sản phẩm</span>}
                                        <label htmlFor="name">Mô tả</label>
                                    </div>
                                    <div className="input-group mb-3">
                                        <label className="input-group-text py-3" htmlFor="inputGroupSelect02">Danh mục</label>
                                        <select {...register('category', { required: true })} id="category" className="form-select" >
                                            {props.cates &&
                                                props.cates.map((category) => {
                                                    return (
                                                        <option value={category._id}>{category.name}</option>
                                                    );
                                                })}
                                        </select>
                                    </div>
                                    
                                    <div className="form-floating mb-3">
                                        <input {...register('img')}  className="form-control" id="img" type="file" placeholder="" data-sb-validations="required" />
                                        {/* <label htmlFor="img">
                                            <img className="rounded mx-auto d-block" src='' alt="" />
                                        </label> */}
                                    </div>
                                    <div className="d-grid border border-solid-2 py-2 rounded bg-primary"><button className="" id="submitButton" type="submit">Cập nhập</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductEdit