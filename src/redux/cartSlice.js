import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtocart: (state, action) => {
      let existingProduct = state.find((product) => {
        return (
          product.title.toLowerCase() === action.payload.title.toLowerCase()
        );
      });
      if (existingProduct) {
        return state.map((product) => {
          if (product.id === existingProduct.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

      // return [...state,action.payload]
    },
    remove: (state, action) => {
      console.log(action);

      return state.filter((product) => {
        return product.id !== action.payload.id;
      });
    },
  },
});
export const { addtocart, remove } = cartSlice.actions;
