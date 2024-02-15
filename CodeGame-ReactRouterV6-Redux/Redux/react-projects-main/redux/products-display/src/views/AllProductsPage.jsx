import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchAllProducts,
  setAllProducts,
} from "../redux/actions/productActions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const { data } = await axios.get("https://fakestoreapi.com/products");
    //   dispatch(setAllProducts(data));
    // };
    // fetchProducts();

    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="max-w-[1200px] mx-auto px-2 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link className="flex flex-col" to={`/productDetail/${product.id}`}>
          {/* Each Product data */}
          <div className="flex flex-col border border-gray-400 p-3 gap-4 justify-between flex-1">
            {/* image */}
            <div className="p-5 h-[250px] flex flex-row justify-center border border-b-gray-400">
              <img
                src={product.image}
                alt={product.title}
                className="h-[100%] border-none"
              />
            </div>
            <h2 className="text-xl font-bold">{product.title}</h2>
            <h2 className="text-xl font-bold">${product.price}</h2>
            <p className="text-gray-400">{product.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
