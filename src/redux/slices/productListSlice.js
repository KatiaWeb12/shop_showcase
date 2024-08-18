import { createSlice } from "@reduxjs/toolkit";

function getProductsInfo(el) {
  return {
    id: el.id,
    category: el.category,
    title: el.title,
    description: el.description,
    price: el.price,
    image: el.image,
    quantity: 0,
  };
}
const initialState = [];
const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      return payload.map((el) => getProductsInfo(el));
    },
    resetList: () => initialState,
  },
});

export const { actions: productListActions } = productListSlice;
export const { reducer: productListReducer } = productListSlice;
