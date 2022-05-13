import React from 'react';

const Contact = () => {
    return (
        <div className='bg-appointment h-[500px] w-full mt-20'>
            <div className='py-4'>
                <h4 className='text-xl text-secondary font-bold  py-4'>Contact Us</h4>
                <h1 className='text-4xl text-white'>Stay Connected With Us</h1>
            </div>
            <div className='flex justify-center items-start'>
                <form>
                    <input type="email" placeholder="Email Address" className="input input-bordered input-primary lg:w-80 w-full max-w-xs block my-8" />
                    <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full max-w-sm block my-8" />
                    <textarea className="textarea textarea-primary block w-full max-w-sm my-8" placeholder="Your Message"></textarea>
                    <div className='lg:text-center'><button className="btn btn-primary text-white font-bold">Get Started</button></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;