import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-banner">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg" alt='' />
                <div className='lg:mx-10'>
                    <h1 className="text-5xl font-bold lg:text-justify">Your New Smile Starts Here!</h1>
                    <p className="py-6 lg:text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className='lg:text-left'><button className="btn btn-primary text-white font-bold">Get Started</button></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;