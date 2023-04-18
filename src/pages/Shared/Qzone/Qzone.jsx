import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
import bg1 from '../../../assets/bg1.png'
import { Button, Container } from 'react-bootstrap';
const Qzone = () => {
    return (
        <>
            <div className='bg-secondary mt-3  text-center py-4 my-4'>
                <h3>Q-Zone</h3>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            <div style={{ backgroundImage: `url(${bg1})`, height:'400px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Container className="text-center pt-5 ">
                    <h1 className='text-white ' >Create an Amazing Newspaper</h1>
                    <p className='text-white'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='' variant="danger">Learn More</Button>
                </Container>
            </div>

        </>
    );
};

export default Qzone;