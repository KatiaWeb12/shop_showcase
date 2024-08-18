import "./ProductCounter.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../redux/slices/cartSlice";
import classNames from "classnames";

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
        -
      </button>
      <span>{currentProduct.quantity}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}
