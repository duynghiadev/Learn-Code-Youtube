import React from 'react';
import { Home } from './Home';
import { Layout } from './Layout';
import { router as productsRouter } from '../Products';
import { router as recipesRouter } from '../Recipes';

export const path = '';

export const router = {
  path,
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    productsRouter,
    recipesRouter
  ]
};
