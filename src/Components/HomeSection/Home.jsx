import React from 'react';
import Info from './Info';
import Services from './Services';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner/>
            <Info/>
            <Services/>
        </div>
    );
};

export default Home;