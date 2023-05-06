import React from 'react';
import Category from '../Category/Category';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Category></Category>
        </div>
    );
};

export default Home;