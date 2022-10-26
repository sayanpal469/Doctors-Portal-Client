import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const reviewInfo = [
        {
            para: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Wison Herry',
            city: 'California',
            pic: 'https://i.postimg.cc/rs9KhpBP/people1.png'
        },
        {
            para: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Sayra Filora',
            city: 'Canada  ',
            pic: 'https://i.postimg.cc/zX5d3P0z/people2.png'
        },
        {
            para: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Eva Smith',
            city: 'Spain',
            pic: 'https://i.postimg.cc/WzsMpxjx/people3.png'
        },
    ]
    return (
        <div className='px-12 mb-10'>
            <h3 className='text-primary text-xl font-semibold'>Testimonial</h3>
            <h1 className='text-4xl'>What Our Patients Says</h1>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    reviewInfo.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;