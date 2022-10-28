import React from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import AppointmentTop from './AppointmentTop';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <AppointmentTop date={date} setDate={setDate}></AppointmentTop>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;