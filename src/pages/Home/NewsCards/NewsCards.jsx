import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaEye } from 'react-icons/fa';


const NewsCards = ({ news }) => {
    const { _id, rating, total_view, title, author, image_url, details } = news
    console.log(rating)
    return (
        <>
            <Card className=" mb-4 ">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={news.image_url && image_url} />
                    <Card.Text>
                        {details.slice(0, 200)}...<Link to={`/news/${_id}`}>Read More</Link>
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='d-flex flex-grow-1 justify-content-start align-items-center' >
                        <Rating style={{ maxWidth: 180 }} value={(rating?.number)} readOnly />
                        <span className='ms-2 fs-5' >{rating?.number}</span>
                    </div>
                    <div>
                       <span className='fs-3'> <FaEye ></FaEye> </span>{total_view}
                    </div>
                </Card.Footer>
            </Card>

        </>

    );
};

export default NewsCards;