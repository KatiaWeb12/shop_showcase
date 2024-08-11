import { useEffect, useState } from "react";
import "./ProductCardList.css";
import { api } from "../../api/api";
import ProductCard from "../productCard/ProductCard";

function getProductsInfo(data) {
  return data.map((el) => {
    return {
      id: el.id,
      category: el.category,
      title: el.title,
      description: el.description,
      price: el.price,
      image: el.image,
    };
  });
}
export default function ProductCardList({ activeFilter }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([]);
    if (activeFilter) {
      api
        .getProductsByCategory(activeFilter)
        .then((res) => res.json())
        .then((data) => {
          setProducts(getProductsInfo(data));
        });
    } else {
      api
        .getProducts()
        .then((res) => res.json())
        .then((data) => {
          setProducts(getProductsInfo(data));
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
