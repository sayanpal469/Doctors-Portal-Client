import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'

const AppointmentTop = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-36">
                <img src={chair} className="max-w-sm lg:max-w-lg  rounded-lg shadow-2xl" alt='#' />
                <div className='shadow-xl p-5'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentTop;