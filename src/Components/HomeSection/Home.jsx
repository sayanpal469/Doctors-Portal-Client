import React from 'react';
import AppointmentBanner from './AppointmentBanner';
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
            <AppointmentBanner/>
            <Reviews/>
            <Contact/>
        </div>
    );
};

export default Home;