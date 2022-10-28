import React from 'react';

const ServiceCard = ({service}) => {
    console.log(service)
    return (
        <div className="card border-none max-w-lg shadow-lg rounded-none">
            <figure className="px-10 pt-10">
                <img src={service.pic} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.heading}</h2>
                <p>{service.para}</p>
            </div>
        </div>
    );
};

export default ServiceCard;