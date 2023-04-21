import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCards from '../NewsCards/NewsCards';

const Category = () => {
    const { id } = useParams()
    console.log(id)
    const categories = useLoaderData()
    return (
        <>
            <h3 className='mt-4'>Dragon News Home</h3>
            {id && <h2>This Category News: {categories.length}</h2>}
            {categories.map(news => <NewsCards key={news._id} news={news} ></NewsCards>)}


        </>
    );
};

export default Category;