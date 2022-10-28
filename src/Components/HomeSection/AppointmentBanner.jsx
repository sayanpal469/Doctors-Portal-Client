import React from 'react';
import doctor from '../../assets/images/doctor-small.png'

const AppointmentBanner = () => {
    return (
        <div className="mt-20 px-14 lg:flex items-center mb-10 bg-[url('https://i.postimg.cc/PJGXqMrb/appointment.png')]">
            <img className='mt-[-130px] hidden lg:block' src={doctor} alt="" />
            <div className='py-10'>
                <h3 className='font-semibold text-primary text-lg'>Appointment</h3>
                <h1 className='text-2xl text-white'>Make an appointment Today</h1>
                <p className='text-white my-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className='btn btn-primary'>Get Started</button>
            </div>
        </div>
    );
};

export default AppointmentBanner;