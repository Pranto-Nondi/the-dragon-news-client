import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (

        <Container className=' fluid '>
            <div className='text-center mt-5 '>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>


            <div className='d-flex fluid bg-light p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' pauseOnHover speed={50}>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>

                            <Nav.Link eventKey={2} href="#memes">
                                Profile

                            </Nav.Link>
                            <Button variant="dark">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </Container >
    );
};

export default Header;