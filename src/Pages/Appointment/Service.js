import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
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
                <div class="card-actions">
                    <label for="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} class="btn btn-wide bg-gradient-to-r from-secondary to-primary border-none uppercase text-white font-bold">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;