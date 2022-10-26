import React from 'react';
import Appointment from './Appointment';
import Contact from './Contact';
import Exceptional from './Exceptional';
import Info from './Info';
import Reviews from './Reviews';
import Services from './Services';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner/>
            <Info/>
            <Services/>
            <Exceptional/>
            <Appointment/>
            <Reviews/>
            <Contact/>
        </div>
    );
};

export default Home;