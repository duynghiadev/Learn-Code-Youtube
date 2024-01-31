import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listCates } from "../../../../api/category";
import { CategoryType } from "../../../../types/category";
import { ProductType } from "../../../../types/product";

type ManagerProductProps = {
  data: ProductType[];
  onRemoveItem: (_id: number) => void;
};

const ManagerProduct = (props: ManagerProductProps) => {
  const [categorys, setCategorys] = useState<CategoryType[]>([]);
    useEffect(() => {
        const getCategorys = async () => {
            const { data: cates } = await listCates();
            setCategorys(cates);
        };
        getCategorys();
    }, []);
  return (
    <div className="p-[10px]">
      <h2 className=" my-4 mx-4 text-left">
        <Link className="text-2xl" to={`/admin/product/add`}>
          Thêm sản phẩm mới
        </Link>
      </h2>
      <table style={{border : "1px solid black"}} className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th className="">Ảnh sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá  sản phẩm</th>
            <th>Danh mục</th>
            <th>Mô tả sản phẩm</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/product/${item._id}`}>
                      <img
                        className="w-60 rounded mx-auto d-block"
                        src={item.img}
                        alt=""
                      />
                    </Link>
                  </td>

                  <td>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.title}</td>
                  <td>
                    <Link to={`/admin/product/${item._id}/edit`} style={{ color: 'blue' }}>Edit</Link>&nbsp;
                    <button  style={{ color: 'red' }} className="" onClick={() => props.onRemoveItem(item._id)}>
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
};

export default ManagerProduct;
