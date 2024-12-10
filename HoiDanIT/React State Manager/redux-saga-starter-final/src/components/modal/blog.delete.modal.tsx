import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { deleteBlogPending } from '../../redux/blog/blog.slide';

const BlogDeleteModal = (props: any) => {
    const { dataBlog, isOpenDeleteModal, setIsOpenDeleteModal } = props;
    const dispatch = useAppDispatch();

    const isDeleting = useAppSelector(state => state.blog.isDeleting);
    const isDeleteSuccess = useAppSelector(state => state.blog.isDeleteSuccess);

    useEffect(() => {
        if (isDeleteSuccess) {
            setIsOpenDeleteModal(false);
            toast.success("Delete succeed");
        }
    }, [isDeleteSuccess]);

    const handleSubmit = () => {
        if (dataBlog?.id) {
            dispatch(deleteBlogPending({ id: dataBlog?.id }))
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
                    Delete A Blog
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Delete the blog: {dataBlog?.title ?? ""}
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

export default BlogDeleteModal;