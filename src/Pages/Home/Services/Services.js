import React from 'react';
import Service from '../Service/Service';
import cavity from '../../../assets/images/cavity.png'
import fluride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'

const Services = () => {
    return (
        <div className='w-full mt-20 px-10'>
            <h1 className='text-primary text-2xl font-bold py-6'>OUR SERVICES</h1>
            <h1 className='text-4xl pb-3'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-5'>
                <Service img={fluride} title="Fluoride Treatment"></Service>
                <Service img={cavity} title="Cavity Filling"></Service>
                <Service img={whitening} title="Teeth Whitening"></Service>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='lg:mx-10'>
                        <h1 className="text-5xl font-bold lg:text-justify">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 lg:text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='lg:text-left'><button className="btn btn-primary text-white font-bold">Get Started</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;