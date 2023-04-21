import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCards = ({ news }) => {
    const { _id, rating, total_view, title, author, image_url, details } = news
    return (
        <>
            <Card className=" mb-4 ">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.slice(0, 200)}...<Link to={`/news/${_id}`}>Read More</Link>
                    </Card.Text>
                  
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

        </>

    );
};

export default NewsCards;