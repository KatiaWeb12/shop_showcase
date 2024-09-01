import ProductCounter from "../productCounter/ProductCounter";
import "./CartProduct.css";
import Delete from "../../../../assets/delete.png";
import { useState } from "react";
import Modal from "../../../modal/Modal";
export default function CartProduct({
  product: { price, imageSrc, title, id },
}) {
  const [isOpenWodalWindow, setIsOpenWodalWindow] = useState(false);
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
          <button className="delete" onClick={() => setIsOpenWodalWindow(true)}>
            <img src={Delete} alt="DeleteButtonImg" />
          </button>
        </div>
      </div>
      {isOpenWodalWindow && (
        <Modal productName={title} id={id} onClose={setIsOpenWodalWindow} />
      )}
    </div>
  );
}
