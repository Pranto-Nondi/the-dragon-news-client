import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-toastify';
const NavigationBar = () => {
    const { user, loggedOut, loading, setLoading } = useContext(AuthContext) || {}
    console.log(loading)
    console.log(user)
    const handelLogOut = () => {
        loggedOut()
            .then(() => {
                toast.success(`LogOut SucessFull`)
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
                            <Link className='text-decoration-none text-dark' to="/categories/0">Home</Link>
                            <Link className='text-decoration-none text-dark' >Career</Link>
                            <Link className='text-decoration-none text-dark' >About</Link>
                        </Nav>
                        <Nav>


                            {
                                !user && <>
                                    <FaUserCircle style={{ fontSize: '2rem' }} ></FaUserCircle>
                                    <Link to="/login" >&nbsp;&nbsp;<Button variant="dark" size='md' >LogIn</Button></Link>
                                </>
                            }
                            {
                                !user || loading && <>
                                    <FaUserCircle style={{ fontSize: '2rem' }} ></FaUserCircle>
                                    <Link to="/login" ><Button variant="dark" size='md' >LogIn</Button></Link>
                                </>
                            }

                            {
                                // !user ? <>
                                //     <Link to="/login" ><Button variant="dark" size='md' >LogIn</Button></Link>

                                // </> : !loading ? <>
                                //     <p ><span style={{ fontSize: '1.5rem' }}>{user.displayName}&nbsp;&nbsp; </span></p>
                                //     <Link ><Button variant="dark" size='md' >LogOut</Button></Link>
                                // </> : <Spinner animation="border" variant="light" />
                                user && !loading && <>
                                    <p ><span style={{ fontSize: '1.5rem' }}>{user.displayName}&nbsp;&nbsp; </span></p>
                                    <Link to='/register' ><Button onClick={handelLogOut} variant="dark" size='md' >LogOut</Button></Link>
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