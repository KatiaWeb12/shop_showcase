import "./Cart.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CartTrigger from "./CartTrigger";
import { useState } from "react";
import CartProduct from "./components/cartProduct/CartProduct";
import Close from "../../assets/close.png";
import { useSelector } from "react-redux";
export default function Cart() {
  const [isOpened, setIsOpened] = useState(false);
  const cart = useSelector((state) => state.cart);
  function onClose() {
    setIsOpened(false);
  }
  function onOpen() {
    setIsOpened(true);
  }
  return (
    <>
      {Boolean(cart.cartList.length) && <CartTrigger onClick={onOpen} />}
      <Drawer open={isOpened} onClose={onClose} direction="right" size="450px">
        <div className="drawer_content">
          <div className="cart_navigation">
            <h2>Cart</h2>
            <p className="total_price">Total price: {cart.totalPrice}$</p>
            <img src={Close} alt="closeCart" onClick={onClose} />
          </div>
          <div className="cart_product_list">
            {cart.cartList.map((el) => (
              <CartProduct product={el} key={el.id} />
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
}
