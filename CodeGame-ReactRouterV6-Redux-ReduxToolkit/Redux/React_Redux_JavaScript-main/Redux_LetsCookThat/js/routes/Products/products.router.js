import { AllProductsContainer } from './AllProducts';
import AddProduct from './Add';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductDetail } from './ProductDetail';

const path = '/products';

export const router = {
  path,
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <AllProductsContainer />
    },
    {
      path: `${path}/add`,
      element: <AddProduct />
    },
    {
      path: `${path}/:productId`,
      element: <ProductDetail />
    }
  ]
};
