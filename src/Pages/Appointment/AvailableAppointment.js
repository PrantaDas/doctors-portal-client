import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {

    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP');

    const { data: services, isLoading, error, refetch } = useQuery(['available', formatedDate], () => fetch(`https://protected-garden-03211.herokuapp.com/available?date=${formatedDate}`).then(res => res.json()))

    if (isLoading) return (<p className='text-secondary'>Loading...</p>)

    if (error) return (<p className='text-secondary'>An error occured {error.message}</p>)

    return (
        <div className='my-20'>
            <h3 className='text-3xl text-secondary mb-32'>Available Appointments on {format(date, 'PP')}</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-10'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} refetch={refetch} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;