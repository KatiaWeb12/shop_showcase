import { configureStore } from "@reduxjs/toolkit";
import { productListReducer } from "./slices/productListSlice";
import { cartReducer } from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    productList: productListReducer,
    cart: cartReducer,
  },
});
export default store;
