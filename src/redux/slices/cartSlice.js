import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartList: [],
   totalPrice: 0
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, {payload})=>{
      state.cartList.push(payload)
    },
    resetValue: () => initialState,
  },
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
