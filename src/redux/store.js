import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
export const myStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
