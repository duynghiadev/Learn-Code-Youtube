import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

const UserEditModal = (props: any) => {
    const { isOpenUpdateModal, setIsOpenUpdateModal, dataUser } = props;
    const [id, setId] = useState();

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");

    useEffect(() => {
        if (dataUser?.id) {
            setId(dataUser?.id);
            setEmail(dataUser?.email);
            setName(dataUser?.name)
        }
    }, [dataUser])


    const handleSubmit = () => {
        if (!email) {
            alert("email empty");
            return;
        }
        if (!name) {
            alert("name empty");
            return;
        }
        console.log({ email, name, id })
    }

    return (
        <>
            <Modal
                show={isOpenUpdateModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop={false}
                onHide={() => setIsOpenUpdateModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Update A User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Name">
                        <Form.Control
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='warning'
                        onClick={() => setIsOpenUpdateModal(false)} className='mr-2'>Cancel</Button>
                    <Button onClick={() => handleSubmit()}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UserEditModal;