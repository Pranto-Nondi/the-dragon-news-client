import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useRef } from 'react';
const Profile = () => {
    const { user } = useContext(AuthContext)
    const nameRef = useRef(user.displayName)
    const photoUrlRef = useRef(user.photoURL)
    const handelUpdateProfile = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value)

    }
    return (
        <Form onSubmit={handelUpdateProfile} className='w-75'>
            <Alert.Heading className='text-center mt-4 '> Update Your Profile</Alert.Heading>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user.email} type="email" name='email' placeholder="Your Email" />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control ref={nameRef} defaultValue={user.displayName} type="text" name='name' placeholder="Your Name" />
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
                <Form.Control type="password" name='password' placeholder="Current Password" />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept Term & Conditions" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
    );
};

export default Profile;