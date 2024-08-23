import { useEffect } from "react";
import "./ProductCardList.css";
import { api } from "../../api/api";
import ProductCard from "../productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "../../redux/slices/productListSlice";

export default function ProductCardList({ activeFilter }) {
  const { fullProductList, searchProducts } = useSelector(
    (state) => state.productList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productListActions.resetList());
    if (activeFilter) {
      api
        .getProductsByCategory(activeFilter)
        .then((res) => res.json())
        .then((data) => {
          dispatch(productListActions.addProducts(data));
        });
    } else {
      api
        .getProducts()
        .then((res) => res.json())
        .then((data) => {
          dispatch(productListActions.addProducts(data));
        });
    }
  }, [activeFilter, dispatch]);
  return (
    <div className="productsCardList">
      {(searchProducts.length ? searchProducts : fullProductList).map((el) => (
        <ProductCard cardInfo={el} key={el.id} />
      ))}
    </div>
  );
}
