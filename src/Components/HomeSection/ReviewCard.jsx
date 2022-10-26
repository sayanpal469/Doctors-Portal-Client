import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl py2">
            <div className="card-body">
                <p>{review.para}</p>
                <div className="flex items-center mt-5">
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.pic}  alt='#'/>
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h3>{review.name}</h3>
                        <h4>{review.city}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;