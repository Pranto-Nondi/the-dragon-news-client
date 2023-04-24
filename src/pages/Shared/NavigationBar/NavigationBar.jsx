import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
const NavigationBar = () => {
    const { user, loggedOut, loading, setLoading } = useContext(AuthContext) || {}
    console.log(loading)
    console.log(user)
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
                                <FaUserCircle style={{ fontSize: '2rem' }} ></FaUserCircle>
                            </Nav.Link>{
                                loading ? <>
                                    <Link to="/login" ><Button variant="dark" size='md' >LogIn</Button></Link>

                                </> : user ? <>

                                    <p ><span style={{ fontSize: '1.5rem' }}>{user.displayName}&nbsp;&nbsp; </span></p>
                                    <Link ><Button variant="dark" size='md' >LogOut</Button></Link>
                                </> : <Link to="/login" ><Button variant="dark" size='md' >LogIn</Button></Link>

                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;