import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setTreatment(null);
        console.log(slot);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">{name}</h3>
                    <div>
                        <form onSubmit={handleBooking}>
                            <input type="text" name='date' placeholder="Type here" value={format(date, 'PP')} disabled class="input input-bordered w-full max-w-xs my-2" />
                            <select name='slot' class="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Time</option>
                                {
                                    slots.map(slot => <option value={slot}>{slot}</option>)
                                }
                            </select>
                            <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full max-w-xs my-2" />
                            <input type="text" name='number' placeholder="Phone Number" class="input input-bordered w-full max-w-xs my-2" />
                            <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs my-2" />
                            <input type="submit" class="w-full max-w-xs my-2 btn " value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;