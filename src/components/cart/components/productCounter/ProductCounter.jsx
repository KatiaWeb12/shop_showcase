import "./ProductCounter.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../redux/slices/cartSlice";
import classNames from "classnames";
import Increase from "../../../../assets/plus.png";
import Decrease from "../../../../assets/minus.png";
export default function ProductCounter({ productId }) {
  const currentProduct = useSelector((state) =>
    state.cart.cartList.find((el) => el.id === productId)
  );
  const isDisabledButton = currentProduct.quantity === 1;
  const dispatch = useDispatch();
  function increaseCount() {
    dispatch(cartActions.increaseProductQuantity(productId));
  }
  function decreaseCount() {
    dispatch(cartActions.decreaseProductQuantity(productId));
  }
  return (
    <div className="counter">
      <button
        onClick={decreaseCount}
        disabled={isDisabledButton}
        className={classNames({ disabledButton: isDisabledButton })}
      >
        <img src={Decrease} alt="minusImg" />
      </button>
      <span>{currentProduct.quantity}</span>
      <button onClick={increaseCount}>
        <img src={Increase} alt="plusImg" />
      </button>
    </div>
  );
}
