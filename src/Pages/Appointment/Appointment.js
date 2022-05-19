import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    const location = useLocation();

    
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;