import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
const NavigationBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto  gap-3 ">
                            <Link className='text-decoration-none text-dark' to="/categories/0">Home</Link>
                            <Link className='text-decoration-none text-dark' >Career</Link>
                            <Link className='text-decoration-none text-dark' >About</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link >
                                <FaUserCircle style={{fontSize:'2rem'}} ></FaUserCircle>
                            </Nav.Link>
                            <Link to='/login' ><Button variant="dark" size='md' >Login</Button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;