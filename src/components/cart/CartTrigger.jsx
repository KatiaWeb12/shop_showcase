import cart from "../../assets/cart.png";
import "./Cart.css";

export default function CartTrigger({ onClick }) {
  return (
    <button className="cart_trigger" onClick={onClick}>
      <img src={cart} alt="cart_trigger" />
    </button>
  );
}
