import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <>
            <div className='mt-4'>
                <h2>Login with</h2>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <br />
                <Button variant="outline-secondary"><FaGithub /> Login With Github  </Button>
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