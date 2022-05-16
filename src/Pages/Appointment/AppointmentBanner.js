import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date,setDate}) => {
    
    return (
        <div class="hero min-h-screen bg-banner bg-center bg-cover bg-no-repeat">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl my-8" alt='' />
                <div className='shadow-lg lg:mx-20 rounded-lg'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        styles={{
                            caption:{color:'red'}
                        }}
                    />
                    <p className='font-bold text-primary'>You have picked:{format(date,'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;