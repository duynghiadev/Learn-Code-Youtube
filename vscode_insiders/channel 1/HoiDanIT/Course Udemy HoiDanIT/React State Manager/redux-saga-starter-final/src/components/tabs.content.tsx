import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import UsersTable from './users.table';
import BlogsTable from './blogs.table';

function TabsContent() {
    return (
        <Container>
            <Tabs
                defaultActiveKey="user"
                id="uncontrolled-tab-example"
                className="mb-3 mt-3"
            >
                <Tab eventKey="user" title="Users">
                    <UsersTable />
                </Tab>
                <Tab eventKey="blog" title="Blogs">
                    <BlogsTable />
                </Tab>

            </Tabs>
        </Container>
    );
}

export default TabsContent;