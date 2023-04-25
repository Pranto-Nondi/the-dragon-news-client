import React, { useContext, useRef, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const nameRef = useRef()
    const [password, setPassword] = useState(null)
    const [strength, setStrength] = useState("");
    const [email, setEmail] = useState(null)
    const [show, setShow] = useState(false)
    const [passwordError, setPasswordError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { user,createUser, loggedOut, setUpdateProfile,emailVerification } = useContext(AuthContext)
    const handelRegister = (e) => {
        e.preventDefault()
        setError('')
        if (emailError) {
            e.target.email.focus();
        }
        else if (passwordError) {
            e.target.password.focus();
        }
        createUser(email, password)
            .then(result => {
                const signUpUser = result.user
                console.log(signUpUser)
                setUpdateProfile(signUpUser, nameRef.current.value)
                    .then(() => {
                        console.log(`profile updated`)
                    })
                    .catch(error => {
                        setError(error.message)
                    })
                    emailVerification(signUpUser)
                    .then(()=>{
                        toast.info(`Email Verification sent.Please Confirm Verification`)
                    })

                loggedOut()
                    .then(() => {
                        console.log(`logout sucessFull`)
                        navigate(`/login`)
                        // toast.success(`Sign Up sucessFull `)
                    })
                    .catch(error => {
                        setError(error.message)
                    })
                e.target.reset()
                setError('')


            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }
    // console.log(name)
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


        // if (password.length >= 8) {

        //     setStrength(`Strong`)
        // }
        // else if (password.length >= 6) {
        //     setStrength(`Moderate`)
        // }
        // else if (password.length == 0) {
        //     setStrength(`Weak`)
        // }
        // else {
        //     setStrength(`Weak`)


        // }
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");

        }
        else if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one LowerCase letter");
        }
        else if (!/[A-Z]+.*/.test(password)) {
            setPasswordError("Password must contain at least one UpperCase letter");
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
        if (password.length >= 8) {

            setStrength(`Strong`)
        }
        else if (password.length >= 6) {
            setStrength(`Moderate`)
        }
        else if (password.length == 0) {
            setStrength(`Weak`)
        }
        else {
            setStrength(`Weak`)


        }
    }


    return (
        <>
            <Form onSubmit={handelRegister} className=' mb-10 w-75 h-50 mx-auto ' >
                <Alert.Heading className='text-center mt-4 '> Register Your Account</Alert.Heading>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" name='name' placeholder="Enter Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='url' placeholder="Photo Url" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handelEmailField} type="email" name='email' placeholder="Enter Your  email" required />
                    {emailError && <><span className='text-danger'> {emailError}</span></>}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handelPasswordField} type={show ? 'text' : 'password'} name='password' placeholder="Enter Your Password" required />
                    {strength && <><span className={
                        strength === "Weak"
                            ? "text-danger"
                            : strength === "Moderate"
                                ? "text-warning"
                                : "text-success"
                    }> {strength}</span></>}
                    <br />
                    {passwordError && <><span className='text-danger'> {passwordError}</span></>}
                </Form.Group>
                <Form.Label onClick={() => setShow(!show)} className='' >{
                    show ? 'Hide Password' : 'Show Password'
                }</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    <Form.Check type="checkbox" label="Accept Term & Conditions" />
                </Form.Group>
                <Button className='w-100' size="lg" variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted  ">
                    <p className='text-center mt-3' > Already Have an Acount ? <Link className='text-decoration-none mb-5 ' to='/login' >Login Now</Link></p>
                </Form.Text>
                <Form.Text className="text-muted  ">
                    <p className='text-center mt-3 text-danger mb-5' > {error} </p>
                </Form.Text>
            </Form>
        </>
    );
};

export default Register;