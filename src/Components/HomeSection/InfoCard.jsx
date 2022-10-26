import React from 'react';

const InfoCard = ({img, p, title, bgColor}) => {
    return (
        <div className={`card lg:card-side shadow-xl py-4 px-10 ${bgColor}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>{p}</p>
            </div>
        </div>
    );
};

export default InfoCard;