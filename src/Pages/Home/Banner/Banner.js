import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-banner">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl " alt='' />
                <div className='lg:mx-10'>
                    <h1 class="text-5xl font-bold lg:text-justify">Your New Smile Starts Here!</h1>
                    <p class="py-6 lg:text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className='lg:text-left'><button class="btn btn-primary">Get Started</button></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;