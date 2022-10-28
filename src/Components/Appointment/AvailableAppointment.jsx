import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='w-5/6 mx-auto'>
            <h4 className='text-primary text-xl text-center font-semibold mb-10'>Available Appointment {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
                {
                    treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;