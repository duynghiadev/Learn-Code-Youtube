import WarnIcon from "../icons/WarnIcon";
import { useEnterButton } from "../hooks/useEnterButton";
import { useState } from "react";

function DeactivateAccountModal() {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");

  useEnterButton(() => {
    setVisible(false);
    setMessage("Enter pressed 👏 !");
  });

  return (
    <div className="container">
      <div className={`modal ${visible ? "" : "hide"}`}>
        <div className="modal-content">
          <WarnIcon />

          <div className="modal-desc">
            <h2>Deactivate account</h2>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be removed from our servers.
            </p>
          </div>
        </div>
        <div className="modal-actions">
          <button className="btn danger">Deactivate</button>
          <button className="btn">Cancel</button>
        </div>
      </div>

      {message && !visible ? <p className="message">{message}</p> : null}
    </div>
  );
}

export default DeactivateAccountModal;
