import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createBlogPending } from '../../redux/blog/blog.slide';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';

const BlogCreateModal = (props: any) => {
    const { isOpenCreateModal, setIsOpenCreateModal } = props;

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const dispatch = useAppDispatch();
    const isCreating = useAppSelector(state => state.blog.isCreating);
    const isCreateSuccess = useAppSelector(state => state.blog.isCreateSuccess);

    useEffect(() => {
        if (isCreateSuccess) {
            setIsOpenCreateModal(false);
            setTitle("");
            setAuthor("");
            setContent("");
            toast.success("Create succeed!")
        }
    }, [isCreateSuccess])


    const handleSubmit = () => {
        if (!title) {
            alert("title empty");
            return;
        }
        if (!author) {
            alert("author empty");
            return;
        }
        if (!content) {
            alert("content empty");
            return;
        }
        //call api => call redux
        dispatch(createBlogPending({
            title, author, content
        }))
    }

    return (
        <>
            <Modal
                show={isOpenCreateModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop={false}
                onHide={() => setIsOpenCreateModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add A New Blog
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        label="Title"
                        className="mb-3"
                    >
                        <Form.Control
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Author"
                        className="mb-3"
                    >
                        <Form.Control
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            type="text"
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Content">
                        <Form.Control
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            type="text"
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    {isCreating === false ?
                        <>
                            <Button
                                variant='warning'
                                onClick={() => setIsOpenCreateModal(false)} className='mr-2'>Cancel</Button>
                            <Button onClick={() => handleSubmit()}>Save</Button>
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
                            &nbsp; Creating...
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BlogCreateModal;