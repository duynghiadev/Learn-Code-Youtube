import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchCurrentProduct,
  removeCurrentProduct,
  setCurrentProduct,
} from "../redux/actions/productActions";

const ProductsDetailPage = () => {
  const { id } = useParams();

  const selectedProduct = useSelector((state) => state.product.currentProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchProductDetail = async () => {
    //   const { data } = await axios.get(
    //     "https://fakestoreapi.com/products/" + id
    //   );
    //   dispatch(setCurrentProduct(data));
    // };

    // fetchProductDetail();

    if (id) {
      dispatch(fetchCurrentProduct(id));
    }

    return () => {
      dispatch(removeCurrentProduct());
    };
  }, [id, dispatch]);

  return (
    <>
      {selectedProduct && (
        <div>
          <div className="max-w-[1200px] mx-auto px-2 grid grid-cols-2 gap-4">
            {/* Image 1st column */}
            <div className="border border-gray-400">
              <img src={selectedProduct.image} alt="" />
            </div>

            {/* product text 2nd column */}
            <div>
              <h2>{selectedProduct.title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsDetailPage;
