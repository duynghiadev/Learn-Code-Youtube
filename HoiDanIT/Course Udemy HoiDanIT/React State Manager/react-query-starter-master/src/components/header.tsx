
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

function Header() {

    const [mode, setMode] = useState("light")

    useEffect(() => {
        const body = document.querySelector("body");
        if (body) body.setAttribute('data-bs-theme', mode);
    }, [mode])


    return (
        <Navbar className="bg-body-tertiary" data-bs-theme={mode}>
            <Container>
                <Navbar.Brand href="#home">Hỏi Dân IT React Query</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Form.Check
                        defaultChecked={mode === "light" ? false : true}
                        onChange={(e) => {
                            setMode(e.target.checked === true ? "dark" : "light")
                        }}
                        type="switch"
                        id="custom-switch"
                        label={mode === "light" ?
                            <Navbar.Text>Light mode</Navbar.Text>
                            :
                            <Navbar.Text>Dark mode</Navbar.Text>
                        }
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;