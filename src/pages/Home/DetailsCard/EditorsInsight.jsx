import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/editorsInsight1.png'
import second from '../../../assets/editorsInsight2.png'
import third from '../../../assets/editorsInsight3.png'
const EditorsInsight = () => {
    return (
        <>
            <Row xs={1} md={2} lg={3} className="g-4">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={first&&first} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second && second} />
                        <Card.Body>
                            <Card.Title> 21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third && third } />
                        <Card.Body>
                            <Card.Title> 21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    );
};

export default EditorsInsight;