import React, { useState } from "react";
import Modal from "../../components/ModalDemo";

export default function () {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container">
            <Modal
                onOk={() => {
                    console.log("Ok");
                }}
                onCancel={() => {
                    console.log("Cancel");
                    setOpenModal(false);
                }}
                title="Form login"
                isRenderHeader={true}
                isVisible={openModal}
                isRenderCloseIcon={true}
                // renderFooter={() => {
                //     return (
                //         <button onClick={() => {
                //             console.log("Call API login len server");
                //         }} >Ok</button>
                //     )
                // }}
            >
                <h2>Demo Modal</h2>
                <form>
                    <input type="text" />
                </form>
            </Modal>

            <button 
                onClick={() => {
                    setOpenModal(true);
                }}>Open Modal</button>
        </div>
    )
}