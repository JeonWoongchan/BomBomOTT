import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/showMe")
            .then((res) => {
                return res.json();
            })
            .then(function (result) {
                setData(result);
            })
    },[]);

    return (
        <div className="App container">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* {data.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)} */}
            <div className='header'></div>
        </div>
    );
}

export default App;
