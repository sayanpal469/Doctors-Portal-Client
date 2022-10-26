import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-14 mb-20'>
            <InfoCard title='Opening Hours' p='10am to 8pm' bgColor='bg-primary' img={clock}></InfoCard>
            <InfoCard title='Visit our location' p='Brooklyn, NY 10036, United States' bgColor='bg-accent' img={marker}></InfoCard>
            <InfoCard title='Contact us now' p='+000 123 456789' bgColor='bg-primary' img={phone}></InfoCard>
            {/* {
                infoDetails.map(info => <InfoCard info={info}></InfoCard>)
            } */}
        </div>
    );
};

export default Info;