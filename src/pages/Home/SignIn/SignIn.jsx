import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)
    const [show, setShow] = useState(false)
    const [passwordError, setPasswordError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const handelSignIn = (e) => {
        e.preventDefault()
        if (emailError) {
            e.target.email.focus();
        }
        else if (passwordError) {
            e.target.password.focus();
        }

    }
    const handelEmailField = (e) => {
        const email = e.target.value
        setEmail(email)
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailError("Please provide a valid email")
        }
        else {
            setEmailError('')
        }

    }
    const handelPasswordField = (e) => {
        const password = e.target.value
        setPassword(password)
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
        }
        if (!/[A-Z]+.*/.test(password)) {
            setPasswordError("Password must contain at least one capital letter");
        }
        if (!/.*\d+.*/.test(password)) {
            setPasswordError("Password must contain at least one Number");
        }
        if (!/.*\W+.*/.test(password)) {
            setPasswordError("Password must contain at least one Special Charecter");
        }
        else {
            setPasswordError("");
        }
    }
    return (
        <>
            <Form onSubmit={handelSignIn} className='mt-5 w-75 ' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handelEmailField} type="email" name='email' placeholder="Enter email" />
                    {emailError && <><span className='text-danger'> {emailError}</span></>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handelPasswordField} type={show?'text':'password'} name='password' placeholder="Password" />
                    {passwordError && <><span className='text-danger'> {passwordError}</span></>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label onClick={() => setShow(!show)} className='' >{
                        show ? 'Hide Password' : 'Show Password'
                    }</Form.Label>
                </Form.Group>
                <Button className='w-100' size="lg" variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted  ">
                    <p className='text-center mt-3' > Don't Have An Account ? <Link className='text-decoration-none' to='/register' >Register Now</Link></p>
                </Form.Text>
            </Form >
        </>
    );
};

export default SignIn;