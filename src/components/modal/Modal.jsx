import { useDispatch } from "react-redux";
import "./Modal.css";
import { cartActions } from "../../redux/slices/cartSlice";
import Close from "../../assets/close.png";
import { createPortal } from "react-dom";

export default function Modal({ productName, id, onClose }) {
  const dispatch = useDispatch();
  function closeModal() {
    onClose(false);
  }
  function removeCartProduct() {
    dispatch(cartActions.removeCartProduct(id));
    closeModal();
  }
  return createPortal(
    <div className="modal_cont">
      <div className="modal_window">
        <div className="close_window" onClick={closeModal}>
          <img src={Close} alt="" />
        </div>
        <div className="modal_info">
          <p>
            Do you really want to remove the <span>{productName}</span> from the
            shopping cart?
          </p>
          <div className="modal_buttons">
            <button onClick={removeCartProduct}>Delete</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
}
