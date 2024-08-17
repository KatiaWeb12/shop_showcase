import ProductCounter from "../productCounter/ProductCounter";
import "./CartProduct.css";

export default function CartProduct({ product: { price, image, title, id } }) {
  return (
    <div className="cart_product">
      <div className="cart_product_info">
        <img src={image} alt="" />
        <p className="cart_product_title">{title.length > 38 ? title.slice(0, 38) + '...' : title}</p>
        <p>price: {price}$</p>
      </div>
      <ProductCounter />
    </div>
  );
}
