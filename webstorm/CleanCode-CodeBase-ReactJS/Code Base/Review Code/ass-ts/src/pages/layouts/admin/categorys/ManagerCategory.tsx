import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CategoryType } from '../../../../types/category';

type ManagerCategoryProps = {
  data: CategoryType[],
  removeCates: (_id: number) => void
};


const ManagerCategory = (props: ManagerCategoryProps) => {



  return (
    <div className='p-[10px]'>
      <h2 className=" my-4 mx-4 text-left">
        <Link className="text-2xl" to={`/admin/category/add`}>
          Thêm danh mục mới
        </Link>
      </h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên danh mục sản phẩm</th>
            <th>Ảnh</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((category, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/category/${category._id}`}>
                      {category.name}
                    </Link>
                  </td>
                  <td><img src={category.img} alt="" /></td>
                  <td>
                    <Link to={`/admin/category/${category._id}/edit`}>
                      Edit
                    </Link>
                    <button
                      className=""
                      onClick={() => props.removeCates(category._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ManagerCategory