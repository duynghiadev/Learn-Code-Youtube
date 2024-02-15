import { configureStore } from '@reduxjs/toolkit';
import { products } from './routes/Products';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  products
});

export const store = configureStore({ reducer: rootReducer });
