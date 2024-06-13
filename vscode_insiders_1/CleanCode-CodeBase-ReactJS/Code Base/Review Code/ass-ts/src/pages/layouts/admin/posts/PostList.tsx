import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listPost } from "../../../../api/post";
import { CategoryType } from "../../../../types/category";
import { PostType } from "../../../../types/post";

type PostListProps = {
    posts : PostType[],
    onRemovePost : (_id: number) => void;
};

const PostList = (props: PostListProps) => {

  
  return (
    <div className="p-[10px]">
      <h2 className=" my-4 mx-4 text-left">
        <Link className="text-2xl" to={`/admin/post/add`}>
          Thêm bài viết mới
        </Link>
      </h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Tiêu đề bài viết</th>
            <th>Ảnh</th>
            <th>Nội dung</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.posts &&
            props.posts.map((post, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{post.title}</td>
                  <td className="w-1/6">
                      <img className="w-full"  src={post.img} alt="" />
                  </td>
                  <td>
                    {/* <p className="h-50 w-100">{post.desc}</p> */}
                    <textarea className="p-2" cols={30} rows={8} defaultValue={post.desc} />
                  </td>
                      <Link to={`/admin/post/${post._id}/edit`} style={{ color: 'blue' }}>Sửa</Link>&nbsp;
                      <button  style={{ color: 'red' }} className="" onClick={() => props.onRemovePost(post._id)}>
                          Xóa
                        </button>
                    </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
