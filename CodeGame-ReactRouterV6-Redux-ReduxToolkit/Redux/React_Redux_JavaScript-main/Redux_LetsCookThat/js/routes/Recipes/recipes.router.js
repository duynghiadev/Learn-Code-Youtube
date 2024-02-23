import { AllRecipes } from './AllRecipes';
import AddRecipe from './Add';
import React from 'react';
import { Outlet } from 'react-router-dom';

const path = '/recipes';

export const router = {
  path,
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <AllRecipes />
    },
    {
      path: `${path}/add`,
      element: <AddRecipe />
    },
    {
      path: `${path}/:id`,
      element: <div>recipe detail</div>
    }
  ]
};
