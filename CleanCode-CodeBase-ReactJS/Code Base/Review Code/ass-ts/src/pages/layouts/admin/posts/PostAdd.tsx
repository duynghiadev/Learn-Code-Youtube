import axios from 'axios';
import React from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PostType } from '../../../../types/post';

type PostAddProps = {
  addPost: (post: PostType) => void;
};

type FormValues = {
    title : string,
    img : string,
    desc : string
}

const PostAdd = (props: PostAddProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
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
      props.addPost(data);
      navigate("/admin/post");
      window.location.reload();
    }
    return (
        <div className='p-[10px]'>
            <section className="py-5">
                <div className="container px-5">
                    {/* Contact form*/}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">Thêm Bài Viết Mới</h1>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form onSubmit={handleSubmit(onSubmit)} action="" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/* Name input*/}
                                    <div className="form-floating mb-3">
                                        <input  {...register('title', { required: true })} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        {errors.title && errors.title.type === "required" && <span>Nhập vào tiêu đề bài viết</span>}
                                        <label htmlFor="name">Tiêu đề bài viết</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea {...register('desc', { required: true })} className="form-control h-50"  cols={50} rows={10}/>
                                        {errors.desc && errors.desc.type === "required" && <span>NHập vào nội dung bài viết</span>}
                                        <label htmlFor="name">Nội dung bài viết</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input  {...register('img')} className="form-control" id="img" type="file" placeholder="" data-sb-validations="required" />
                                        <label htmlFor="img">
                                            <img className="rounded mx-auto d-block" id='img-preview' src='' alt="" />
                                        </label>
                                    </div>
                                    <div className="d-grid border border-solid-2 py-2 rounded bg-primary"><button className="" id="submitButton" type="submit">Thêm</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default PostAdd