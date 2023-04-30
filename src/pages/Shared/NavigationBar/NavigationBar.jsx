import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';


const NavigationBar = () => {
    const { user, loggedOut, loading } = useContext(AuthContext) || {}

    const activeStyle = { color: 'blue' };
    const location = useLocation()
    console.log(loading)
    console.log(user)
    const handelLogOut = () => {
        loggedOut()
            .then(() => {
                toast.success(`LogOut SuccessFull`)
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto  gap-3 ">

                            <Link to="/" className={`nav-link fs-5 ${location.pathname === '/' ? 'active' : ''}`} style={{ color: location.pathname === '/' ? 'blue' : 'black' }}>
                                Home
                            </Link>
                            <Link to="/career" className={`nav-link fs-5  ${location.pathname === '/career' ? 'active' : ''}`} style={{ color: location.pathname === '/career' ? 'blue' : 'black' }}>
                                Career
                            </Link>
                            <Link to="/about" className={`nav-link fs-5  ${location.pathname === '/about' ? 'active' : ''}`} style={{ color: location.pathname === '/about' ? 'blue' : 'black' }}>
                                About
                            </Link>
                        </Nav>

                        <Nav>

                            {
                                !user && !loading && <>

                                    <Link className='text-decoration-none' to="/login" >&nbsp;&nbsp;<Button variant="dark" size='md' >LogIn </Button></Link>
                                    &nbsp;  &nbsp;
                                    <Link className='text-dark' to='/login' ><FaUserCircle style={{ fontSize: '2rem' }} ></FaUserCircle></Link>
                                </>
                            }

                            {
                                !user || loading && <>

                                    <Spinner animation="border" variant="light" />

                                </>
                            }

                            {

                                user && !loading && <>
                                    <p className='mt-1' ><span style={{ fontSize: '1.5rem' }}>{user.displayName}&nbsp;&nbsp; </span></p>
                                    &nbsp;
                                    <Link to='/login' className='mt-1' ><Button onClick={handelLogOut} variant="dark" size='md' >LogOut</Button></Link>
                                    &nbsp;&nbsp;
                                    {user.photoURL && <div className='text-center'>
                                        <Link to='/profile' ><img src={user.photoURL} alt="Logo" width="50" height="50" className="d-inline-block  rounded-5  "></img></Link>
                                    </div>}
                                    {user.photoURL == null && <div className='text-center'>
                                        <Link className='text-dark ' to='/profile' ><FaUserCircle style={{ fontSize: '2rem' }} className='mt-2' ></FaUserCircle></Link>
                                    </div>}

                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;