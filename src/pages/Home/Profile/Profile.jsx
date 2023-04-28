import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useRef } from 'react';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Profile = () => {
    const { user, setUpdateProfile, loggedOut, logInUser, loading, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const nameRef = useRef(user.displayName)
    const emailRef = useRef(user.email)
    const passwordRef = useRef('')
    const photoUrlRef = useRef(user.photoURL || '')
    const navigate = useNavigate()
    const location = useLocation()
  
    console.log(location,navigate)
    const handelUpdateProfile = (e) => {
        e.preventDefault()
        setError('')
        console.log(emailRef.current.value, passwordRef.current.value, photoUrlRef.current.value, nameRef.current.value)
        setUpdateProfile(user, nameRef.current.value, photoUrlRef.current.value)
            .then(() => {
                // navigate('/')
                <Navigate to='/categories/0'></Navigate>
                // console.log( <Navigate to='/categories/0'></Navigate>)
               
                toast.success(`Successfully profile updated`)

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)

            })
    }


    return (
        <Form onSubmit={handelUpdateProfile} className='w-75'>
            <Alert.Heading className='text-center mt-4 '> Update Your Profile</Alert.Heading>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} readOnly defaultValue={user.email} type="email" name='email' placeholder="Your Email" />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control ref={nameRef} defaultValue={user.displayName} type="text" name='name' placeholder="Your Name" required />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoUrlRef} defaultValue={user.photoURL} type="text" name='url' placeholder=" Photo URL" />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" name='password' placeholder="Current Password" required />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept Term & Conditions" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update
            </Button>
            <Form.Text className="text-muted">
                <p className='text-center mt-3 text-danger mb-5' > {error} </p>
            </Form.Text>

        </Form>
    );
};

export default Profile;