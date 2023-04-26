import React, { useContext, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const SignIn = () => {
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)
    const [show, setShow] = useState(false)
    const [passwordError, setPasswordError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { logInUser, setLoading } = useContext(AuthContext)
    const handelSignIn = (e) => {
        e.preventDefault()
        setError('')
        if (emailError) {
            e.target.email.focus();
        }
        else if (passwordError) {
            e.target.password.focus();
        }
        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                if (loggedUser.emailVerified) {
                   
                    navigate(from, { replace: true })
                    e.target.reset()
                    setError('')
                    setLoading(false)
                    toast.success("Login SuccessFul");

                }
                else {
                    toast.error(" Email Verification failed...PLease first verify and Try again later");
                    setError('')
                }


            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })

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
        else if (!/[A-Z]+.*/.test(password)) {
            setPasswordError("Password must contain at least one capital letter");
        }
        else if (!/.*\d+.*/.test(password)) {
            setPasswordError("Password must contain at least one Number");
        }
        else if (!/.*\W+.*/.test(password)) {
            setPasswordError("Password must contain at least one Special Charecter");
        }
        else {
            setPasswordError("");
        }
    }
    return (
        <>
            <Form onSubmit={handelSignIn} className='mt-5  w-75 mx-auto ' >
                <Alert.Heading className='text-center'> Login Your Account</Alert.Heading>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handelEmailField} type="email" name='email' placeholder="Enter email" required />
                    {emailError && <><span className='text-danger'> {emailError}</span></>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handelPasswordField} type={show ? 'text' : 'password'} name='password' placeholder="Password" required />
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
                <Form.Text className="text-muted  ">
                    <p className='text-center mt-3 text-danger fs-5 ' > {error} </p>
                </Form.Text>
            </Form >
        </>
    );
};

export default SignIn;