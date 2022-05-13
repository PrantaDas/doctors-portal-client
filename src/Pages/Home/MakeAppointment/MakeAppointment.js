import React from 'react';
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className='flex bg-appointment items-center mt-40'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-10'>
                <h3 className='text-xl text-secondary font-bold lg:text-left my-5 sm:text-left'>Appointment</h3>
                <h2 className='text-4xl text-white lg:text-justify my-5'>Make an appointment Today</h2>
                <p className='lg:text-justify  text-white my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className='lg:text-left my-5'><button className='btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-none'>GET STARTED</button></div>
            </div>
        </section>
    );
};

export default MakeAppointment;