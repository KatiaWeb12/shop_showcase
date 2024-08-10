import { useEffect, useState } from "react";
import "./ProductCardList.css";
import { api } from "../../api/api";
import ProductCard from "../productCard/ProductCard";

export default function ProductCardList({ activeFilter }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (activeFilter) {
      api
        .getProductsByCategory(activeFilter)
        .then((res) => res.json())
        .then((data) => {
          setProducts(
            data.map((el) => {
              return {
                id: el.id,
                category: el.category.name,
                title: el.title,
                description: el.description,
                price: el.price,
                image: el.images[0],
              };
            })
          );
        });
    } else {
      api
        .getProducts()
        .then((res) => res.json())
        .then((data) => {
          setProducts(
            data.map((el) => {
              return {
                id: el.id,
                category: el.category.name,
                title: el.title,
                description: el.description,
                price: el.price,
                image: el.images[0],
              };
            })
          );
        });
    }
  }, [activeFilter]);
  return (
    <div className="productsCardList">
      {products.map((el) => (
        <ProductCard cardInfo={el} key={el.id} />
      ))}
    </div>
  );
}
