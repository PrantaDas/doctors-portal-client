import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 mt-10'>
            <div class="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary">
                <figure className='p-3'><img src={clock} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-white pl-2">Opening Hours</h2>
                    <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div class="card lg:card-side bg-accent shadow-xl">
                <figure className='p-3'><img src={marker} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title pl-14 text-white">Visit our location</h2>
                    <p className='text-white'>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div class="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
                <figure className='p-3'><img src={phone} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title pl-20 text-white">Contact us now</h2>
                    <p className='text-white mx-0'>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;