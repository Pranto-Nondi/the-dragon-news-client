import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            <Form className='mt-5 w-75 ' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' size="lg" variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted  ">
                    <p className='text-center mt-3' > Don't Have An Account ? <Link className='text-decoration-none' to='/register' >Register Now</Link></p>
                </Form.Text>
            </Form>
        </>
    );
};

export default SignIn;