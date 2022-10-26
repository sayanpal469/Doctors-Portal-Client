import React from 'react';
import ServiceCard from './ServiceCard';
// import fluoride '../../assets/images/fluoride.png'
// import cavity '../../assets/images/cavity.png'
// import whitening '../../assets/images/whitening.png'

const Services = () => {
    const serviceDetails = [
        {
            pic: 'https://i.postimg.cc/5ys7m7GZ/fluoride.png',
            heading: 'Fluoride Treatment',
            para: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            background: '#0FCFEC'
        },
        {
            pic: 'https://i.postimg.cc/gj108D02/cavity.png',
            heading: 'Cavity Filling',
            para: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            background: '#3A4256'
        },
        {
            pic: 'https://i.postimg.cc/c1vwgk9Z/whitening.png',
            heading: 'Teeth Whitening',
            para: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            background: '#0FCFEC'
        },
    ]
    return (
        <div className='mb-10'>
            <h1 className='uppercase text-primary font-semibold text-center text-2xl'>Our Services</h1>
            <p className='mt-3 mb-5 text-center text-3xl'>Services We Provide</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-14'>
                {
                    serviceDetails.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;