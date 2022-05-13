import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            country: 'California',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Katie',
            country: 'California',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id: 3,
            name: 'Silvia James',
            country: 'California',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        }

    ];
    return (
        <section className='px-10 mt-10'>
            <div className='flex lg:justify-between sm:justify-around'>
                <div>
                    <h4 className="text-xl text-secondary font-bold lg:text-left">Testimonial</h4>
                    <h3 className='text-4xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='lg:w-48 lg:h-40 sm:w-24 sm:h-20' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:px-16 gap-8 mt-10'>
                {
                    reviews.map(review=><Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;