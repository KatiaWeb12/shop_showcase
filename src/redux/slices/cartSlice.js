import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  totalPrice: 0,
};
function getRoundingSum(lastPrice, productPrice) {
  return Number((lastPrice + productPrice).toFixed(2));
}
function getRoundingDecrease(lastPrice, productPrice) {
  return Number((lastPrice - productPrice).toFixed(2));
}
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
      state.totalPrice = getRoundingSum(state.totalPrice, payload.price);
    },
    increaseProductQuantity: (state, { payload }) => {
      const currentProduct = state.cartList.find((el) => el.id === payload);
      if (!currentProduct) {
        return;
      }
      currentProduct.quantity += 1;
      state.totalPrice = getRoundingSum(state.totalPrice, currentProduct.price);
    },
    decreaseProductQuantity: (state, { payload }) => {
      const currentProduct = state.cartList.find((el) => el.id === payload);
      if (!currentProduct) {
        return;
      }
      currentProduct.quantity -= 1;
      state.totalPrice = getRoundingDecrease(
        state.totalPrice,
        currentProduct.price
      );
    },
    removeCartProduct: (state, { payload }) => {
      const currentProduct = state.cartList.find((el) => el.id === payload);
      if (!currentProduct) {
        return;
      }
      const productPrice = Number(
        (currentProduct.price * currentProduct.quantity).toFixed(2)
      );
      state.totalPrice = getRoundingDecrease(state.totalPrice, productPrice);
      state.cartList = state.cartList.filter(
        (el) => el.id !== currentProduct.id
      );
      if (state.cartList.length === 0) {
        state.totalPrice = 0;
      }
    },
    resetValue: () => initialState,
  },
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
