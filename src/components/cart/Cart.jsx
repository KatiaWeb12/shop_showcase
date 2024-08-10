import "./Cart.css";
import Drawer from "rc-drawer";
import CartTrigger from "./CartTrigger";
import { useState } from "react";

export default function Cart() {
  const [isOpened, setIsOpened] = useState(false);
  function onClose() {
    setIsOpened(false);
  }
  return (
    <>
      <CartTrigger onClick={() => setIsOpened(true)} />
      <Drawer open={isOpened} onClose={onClose} placement="right" width="60%">
        Текст
      </Drawer>
    </>
  );
}
