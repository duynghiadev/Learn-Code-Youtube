import { createPortal } from "react-dom";
import WarnIcon from "../icons/WarnIcon";

let modalRoot = document.getElementById("modal-root");

if (!modalRoot) {
  const modalRootDiv = document.createElement("div");
  modalRootDiv.id = "modal-root";
  document.body.appendChild(modalRootDiv);
  modalRoot = modalRootDiv;
}

function Modal({ visible, setVisible, children }) {
  return createPortal(
    <div className={`modal ${visible ? "" : "hide"}`}>
      <div className="modal-container">
        <div className="modal-content">
          <WarnIcon />
          <div className="modal-desc center">
            <h2>Pellentesque bibendum</h2>
            {children}
          </div>
        </div>
        <div className="modal-actions">
          <button onClick={() => setVisible(false)} className="btn">
            Close Modal
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
