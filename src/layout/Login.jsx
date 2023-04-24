import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    return (
        <>
            <ToastContainer />
            <NavigationBar></NavigationBar>
            {/* <Outlet></Outlet> */}
            <Container>
                <Row>
                    <Col lg={3}>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>

                    </Col>
                </Row>

            </Container>

        </>
    );
};

export default Login;