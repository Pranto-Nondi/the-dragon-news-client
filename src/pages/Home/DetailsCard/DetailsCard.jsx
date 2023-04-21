import React from 'react';
import { FaArrowLeft, } from 'react-icons/fa';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from './EditorsInsight';

const DetailsCard = () => {
    const news = useLoaderData()
    const { _id, rating, total_view, title, author, image_url, details, category_id } = news
    return (
        <>
            <h3 className='mt-4'>Dragon News</h3>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/categories/${category_id}`} ><Button className='p-2' variant="danger"> <FaArrowLeft /> All news in this category</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
            <h3 className='mt-4'>Editors Insight</h3>
            <EditorsInsight></EditorsInsight>
        </>

    );
};

export default DetailsCard;