import { useDispatch } from "react-redux";
import "./ProductCard.css";
import { cartActions } from "../../redux/slices/cartSlice";

export default function ProductCard({ cardInfo }) {
  const dispatch = useDispatch()
  function addProductToCart(){
    const payload = {
      imageSrc: cardInfo.image,
      title: cardInfo.title,
      id: cardInfo.id,
      price: cardInfo.price,
      quantity: 1
    }
    dispatch(cartActions.addProductToCart(payload))
  }
  return (
    <div className="product_card">
      <img src={cardInfo.image} alt="" />
      <div className="card_text">
        <p className="product_title">
          {cardInfo.title.length > 27
            ? cardInfo.title.slice(0, 27) + "..."
            : cardInfo.title}
        </p>
        <div className="card_info">
          <p className="description">
            {cardInfo.description.length > 85
              ? cardInfo.description.slice(0, 85) + "..."
              : cardInfo.description}
          </p>
          <p className="price">{cardInfo.price}$</p>
        </div>
        <button className="add_to_cart" onClick={addProductToCart}>Add to cart</button>
      </div>
    </div>
  );
}
