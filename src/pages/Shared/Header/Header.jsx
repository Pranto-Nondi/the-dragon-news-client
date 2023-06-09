import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import NavigationBar from '../NavigationBar/NavigationBar';
const Header = () => {
    return (

        <Container className=' fluid '>
            <div className='text-center mt-5 '>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='d-flex fluid bg-light p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' pauseOnHover speed={50}>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <NavigationBar></NavigationBar>
          
        </Container >
    );
};

export default Header;