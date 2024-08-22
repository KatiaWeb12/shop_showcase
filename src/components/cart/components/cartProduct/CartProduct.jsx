import ProductCounter from "../productCounter/ProductCounter";
import "./CartProduct.css";
import Delete from "../../../../assets/delete.png";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../redux/slices/cartSlice";
export default function CartProduct({
  product: { price, imageSrc, title, id },
}) {
  const dispatch = useDispatch();
  function removeCartProduct() {
    dispatch(cartActions.removeCartProduct(id));
  }
  return (
    <div className="cart_product">
      <img src={imageSrc} alt="cartImg" className="cart_img" />
      <div className="cart_product_info">
        <div className="cart_product_text">
          <p className="cart_product_title">{title}</p>
          <p>{price}$</p>
        </div>
        <div className="cart_product_buttons">
          <ProductCounter productId={id} />
          <button className="delete" onClick={removeCartProduct}>
            <img src={Delete} alt="DeleteButtonImg" />
          </button>
        </div>
      </div>
    </div>
  );
}
