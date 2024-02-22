import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const UserPage = () => {
    return (
        <Container className="mt-4">
            <Card style={{ width: '18rem' }}>
                <Card.Header>Current User</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Name: ?</ListGroup.Item>
                    <ListGroup.Item>Email: ?</ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    )
}

export default UserPage;