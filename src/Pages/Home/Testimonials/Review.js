import React from 'react';

const Review = ({ review }) => {
    const { name, country, reviews, img } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='font-bold text-justify'>{reviews}</p>
                <div className='py-2 flex items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-6">
                            <img src={img} alt=''/>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-left'>{name}</p>
                        <p className='font-bold text-left'>{country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;