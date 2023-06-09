import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCards from '../NewsCards/NewsCards';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    const { id } = useParams()

    const categories = useLoaderData()
    useTitle(`Category`)
    return (
        <>
            <h3 className='mt-4'>Dragon News Home</h3>
            {id > 0 && <h2>This Category News: {categories.length}</h2>}
            {categories.map(news => <NewsCards key={news._id} news={news} ></NewsCards>)}


        </>
    );
};

export default Category;