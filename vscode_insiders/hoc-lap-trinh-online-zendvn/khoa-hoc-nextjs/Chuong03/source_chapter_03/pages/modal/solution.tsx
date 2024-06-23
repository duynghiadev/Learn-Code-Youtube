import React, { useState } from "react";
import ModalTest from "../../components/ModalSolution";

export default function () {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container">
            {
                openModal &&
                <ModalTest
                    isVisible={openModal}
                    // isRenderCloseIcon={false}
                    // onOk={() => {
                    //     console.log("Submit Form");
                    // }}
                    // onCancel={() => {
                    //     setOpenModal(false)
                    // }}
                    // btnCancelText="Huy Bo"
                    // btnOkText="Submit"
                >
                    <h2>Demo Modal</h2>
                    <form>
                        <input type="text" />
                    </form>
                </ModalTest>
            }
            

            <button 
                onClick={() => {
                    setOpenModal(true);
                }}>Open Modal</button>
        </div>
    )
}