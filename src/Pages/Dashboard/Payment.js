import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2AgjJzJLDexX03BnxYalUKId5amjaqpE7d1kHjhw0jNEFLpb7nJDLQnHoXJkQ4upNPriG1aDjMWR4ZZoXQbON200fR0hxdcx');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appointment, isLoading, refetch } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return (<p className='text-primary'>Loading...</p>)
    }
    return (
        <div className='max-w-full'>
            
                    <div class="card w-50 max-w-md bg-base-100 shadow-xl mx-auto">
                        <div class="card-body">
                            <p>Hello Mr/Mrs. <span className='text-secondary'>{appointment.patientName}</span></p>
                            <h2 class=" text-center">Complete payment for <span className='font-bold'>{appointment.treatment}</span></h2>
                            <p>We will see you on <span className='font-bold text-secondary'> {appointment.date}</span> at <span className='font-bold text-secondary'>{appointment.slot}</span> in the hoslpital premises.</p>
                            <p>Please pay <span className='text-secondary font-bold'>$ {appointment.price}</span> for further processing..</p>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 max-w-md shadow-2xl bg-base-100 mx-auto my-3">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={appointment} />
                            </Elements>
                        </div>
                    </div>
                </div>

    );
};

export default Payment;