import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const params = useParams();
  const products = useSelector((state) => state.products.productsList);

  const product = products.find((prod) => prod.id === params.productId);

  return (
    <div>
      Nazwa produktu to: <h1>{product.name}</h1>
    </div>
  );
};
