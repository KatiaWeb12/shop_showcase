import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, { payload }) => {
      const currentProductIndex = state.cartList.findIndex(
        (el) => el.id === payload.id
      );
      if (currentProductIndex === -1) {
        state.cartList.push(payload);
      } else {
        state.cartList[currentProductIndex].quantity += 1;
      }
      state.totalPrice += payload.price;
    },
    increaseProductQuantity: (state, { payload }) => {
      const currentProduct = state.cartList.find((el) => el.id === payload);
      if (!currentProduct) {
        return;
      }
      currentProduct.quantity += 1;
      state.totalPrice += currentProduct.price;
    },
    decreaseProductQuantity: (state, { payload }) => {
      const currentProduct = state.cartList.find((el) => el.id === payload);
      if (!currentProduct) {
        return;
      }
      currentProduct.quantity -= 1;
      state.totalPrice -= currentProduct.price;
    },
    removeCartProduct: (state, { payload }) => {
      const currentProductIndex = state.cartList.findIndex(
        (el) => el.price === payload
      );
      state.cartList.splice(currentProductIndex, 1);
    },
    resetValue: () => initialState,
  },
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
