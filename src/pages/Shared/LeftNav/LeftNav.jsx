import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestLeftNavPart from './RestLeftNavPart';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`https://the-dragon-news-server-tawny.vercel.app/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <h3 className='mt-4'>All Category</h3>
            <div className='ps-4'>
                {
                    categories.map(category => <p key={category.id}><Link className='text-decoration-none text-black' to={`categories/${category.id}`} >{category.name}</Link></p>)
                }</div>
            <RestLeftNavPart></RestLeftNavPart>
        </>
    );
};

export default LeftNav;