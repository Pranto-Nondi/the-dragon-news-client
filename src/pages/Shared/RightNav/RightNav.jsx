import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const RightNav = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext)
    const handelGoogleSign = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handelGithubSign = () => {
        // githubSignIn()
        //     .then(result => {
        //         console.log(result.user)

        //     })
        //     .catch(error => {
        //         console.log(error.message)
        //     })
    }
    return (
        <>
            <div className='mt-4'>
                <h2>Login with</h2>
                <Link onClick={handelGoogleSign} ><Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button></Link>
                <br />
                <Button onClick={handelGithubSign} variant="outline-secondary"><FaGithub /> Login With Github  </Button>
            </div>
            <div className='mt-4'>
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item className='w-75'> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='w-75' ><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='w-75' > <FaInstagram /> Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <Qzone></Qzone>
        </>


    );
};

export default RightNav;