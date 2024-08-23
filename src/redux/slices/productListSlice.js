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
const initialState = {
  fullProductList: [],
  searchProducts: [],
};
const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.fullProductList = payload.map((el) => getProductsInfo(el));
    },
    addSearchProducts: (state, { payload }) => {
      state.searchProducts = state.fullProductList.filter((el) =>
        el.title.toLowerCase().includes(payload.toLowerCase())
      );
    },
    resetList: () => initialState,
  },
});

export const { actions: productListActions } = productListSlice;
export const { reducer: productListReducer } = productListSlice;
