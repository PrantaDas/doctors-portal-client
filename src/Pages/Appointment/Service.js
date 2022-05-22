import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots,price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length ? <small>{slots[0]}</small>
                        : <small>All Schedule is Booked</small>
                }</p>
                
                <p>
                    {
                        slots.length ? <small>{slots.length} slots Available</small> :
                            <small>No slots Available</small>
                    }
                </p>
                <p><small>Price: {price} $</small> </p>
                <div className="card-actions">
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} className="btn btn-wide bg-gradient-to-r from-secondary to-primary border-none uppercase text-white font-bold">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;