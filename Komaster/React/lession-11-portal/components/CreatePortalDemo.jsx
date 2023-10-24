import { useState } from "react";
import Modal from "./Modal";

function CreatePortalDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setVisible(true)} className="btn">
        Show modal
      </button>
      <Modal visible={visible} setVisible={setVisible}>
        <p>
          Etiam vitae turpis lectus. Suspendisse potenti. Vestibulum rutrum
          commodo augue, ac ultrices elit consequat vel. Sed vitae nunc a odio
          iaculis placerat. Suspendisse potenti.
        </p>
      </Modal>
    </div>
  );
}

export default CreatePortalDemo;
