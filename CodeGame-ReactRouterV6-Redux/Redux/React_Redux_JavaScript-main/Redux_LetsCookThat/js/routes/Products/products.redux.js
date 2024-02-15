import { createReducer, createAction } from '@reduxjs/toolkit';

export const addProductAction = createAction('products/addProduct', (payload) => {
  return {
    payload: {
      name: payload.name,
      id: crypto.randomUUID()
    }
  };
});

// TODO typo

const initialState = {
  productsList: [
    { id: '1', name: 'Pomidory' },
    { id: '2', name: 'Przyprawa curry' },
    { id: '3', name: 'Olej' },
    { id: '4', name: 'Wołowina 500g' },
    { id: '5', name: 'Ziemniaki' },
    { id: '6', name: 'Pomidory' },
    { id: '7', name: 'Przyprawa curry' },
    { id: '8', name: 'Olej' },
    { id: '9', name: 'Wołowina 500g' },
    { id: '10', name: 'Ziemniaki' }
  ]
};

export const products = createReducer(initialState, (builder) => {
  builder.addCase(addProductAction, (state, { payload }) => {
    state.productsList.push(payload);
  });
});
