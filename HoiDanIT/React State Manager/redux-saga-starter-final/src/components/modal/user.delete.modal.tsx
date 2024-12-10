import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { deleteUserPending } from '../../redux/user/user.slide';

const UserDeleteModal = (props: any) => {
    const { dataUser, isOpenDeleteModal, setIsOpenDeleteModal } = props;

    const dispatch = useAppDispatch();

    const isDeleting = useAppSelector(state => state.user.isDeleting);
    const isDeleteSuccess = useAppSelector(state => state.user.isDeleteSuccess);

    useEffect(() => {
        if (isDeleteSuccess) {
            setIsOpenDeleteModal(false);
            toast.success("Delete succeed");
        }
    }, [isDeleteSuccess]);

    const handleSubmit = () => {
        if (dataUser?.id) {
            dispatch(deleteUserPending({ id: dataUser?.id }))
        }
    }

    return (
        <Modal
            show={isOpenDeleteModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop={false}
            onHide={() => setIsOpenDeleteModal(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Delete A User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Delete the user: {dataUser?.email ?? ""}
            </Modal.Body>
            <Modal.Footer>
                {isDeleting === false ?
                    <>
                        <Button
                            variant='warning'
                            onClick={() => setIsOpenDeleteModal(false)} className='mr-2'>Cancel</Button>
                        <Button onClick={() => handleSubmit()}>Confirm</Button>
                    </>
                    :
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        &nbsp; Deleting...
                    </Button>
                }
            </Modal.Footer>
        </Modal>
    )
}

export default UserDeleteModal;