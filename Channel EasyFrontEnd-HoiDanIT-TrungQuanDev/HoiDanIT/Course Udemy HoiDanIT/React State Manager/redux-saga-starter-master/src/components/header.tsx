
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';

function Header() {

    const [mode, setMode] = useState("light")

    useEffect(() => {
        const body = document.querySelector("body");
        if (body) body.setAttribute('data-bs-theme', mode);
    }, [mode])


    return (
        <Navbar className="bg-body-tertiary" data-bs-theme={mode}>
            <Container>
                <Link to={"/"} className='navbar-brand'>Hỏi Dân IT React - Redux Saga</Link>
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <NavDropdown title="Settings">
                    <NavLink to={"/user"} className='dropdown-item'>
                        User Page
                    </NavLink>
                    <NavDropdown.Divider />
                    <NavLink to={"/login"} className='dropdown-item'>
                        Login
                    </NavLink>

                    <NavDropdown.Item href="#">
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    );
}

export default Header;