import "./Modal.css";
import { useContext, useEffect } from "react";

import { ModalContext } from "../Context/Context";

function Modal() {
  const modalContext = useContext(ModalContext);

  const closeModal = () => {
    modalContext!.setModal(null);
  };
  useEffect(() => {
    if (modalContext?.modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalContext?.modal]);

  return (
    <div className={`modal ${modalContext?.modal ? "modal_active" : ""}`}>
      <div className="modal__container">
        <button
          type="button"
          className="modal__button-close"
          onClick={closeModal}
        ></button>
        {modalContext?.modal}
      </div>
    </div>
  );
}
export default Modal;
