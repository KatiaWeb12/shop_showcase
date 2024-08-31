import { useDispatch, useSelector } from "react-redux";
import "./ProductCard.css";
import { cartActions } from "../../redux/slices/cartSlice";
import ProductCounter from "../cart/components/productCounter/ProductCounter";

export default function ProductCard({ cardInfo }) {
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  function isInCart() {
    return cartList.find((el) => el.id === cardInfo.id);
  }
  function addProductToCart() {
    const payload = {
      imageSrc: cardInfo.image,
      title: cardInfo.title,
      id: cardInfo.id,
      price: cardInfo.price,
      quantity: 1,
    };
    dispatch(cartActions.addProductToCart(payload));
  }
  return (
    <div className="product_card">
      <img src={cardInfo.image} alt="" />
      <div className="card_text">
        <h6 className="product_title">{cardInfo.title}</h6>
        <div className="card_info">
          <p className="description">{cardInfo.description}</p>
          <p className="price">{cardInfo.price}$</p>
        </div>
      </div>
      <div className="productInCart">
        {isInCart() ? (
          <ProductCounter productId={cardInfo.id} />
        ) : (
          <button className="add_to_cart" onClick={addProductToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
