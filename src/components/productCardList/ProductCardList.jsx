import { useEffect, useState } from "react";
import "./ProductCardList.css";
import { api } from "../../api/api";
import ProductCard from "../productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "../../redux/slices/productListSlice";
import EmptyState from "../emptyState/EmptyState";
import ConditionWrapper from "../conditionWrapper/ConditionWrapper";
import ProductCardListSkeleton from "./ProductCardListSkeleton";

export default function ProductCardList({ activeFilter }) {
  const { fullProductList, searchProducts, searchRequest } = useSelector(
    (state) => state.productList
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(productListActions.resetList());
    if (activeFilter) {
      setTimeout(() => {
        api
          .getProductsByCategory(activeFilter)
          .then((res) => res.json())
          .then((data) => {
            dispatch(productListActions.addProducts(data));
          })
          .finally(() => {
            setLoading(false);
          });
      }, 1000);
    } else {
      setTimeout(() => {
        api
          .getProducts()
          .then((res) => res.json())
          .then((data) => {
            dispatch(productListActions.addProducts(data));
          })
          .finally(() => {
            setLoading(false);
          });
      }, 1000); //искусственный эффект долгой загрузки
    }
  }, [activeFilter, dispatch]);
  return (
    <div className="productsCardList">
      <ConditionWrapper condition={loading}>
        <ProductCardListSkeleton />
        <ConditionWrapper condition={searchRequest}>
          <ConditionWrapper condition={searchProducts.length}>
            {searchProducts.map((el) => (
              <ProductCard cardInfo={el} key={el.id} />
            ))}
            <EmptyState />
          </ConditionWrapper>
          {fullProductList.map((el) => (
            <ProductCard cardInfo={el} key={el.id} />
          ))}
        </ConditionWrapper>
      </ConditionWrapper>
    </div>
  );
}
