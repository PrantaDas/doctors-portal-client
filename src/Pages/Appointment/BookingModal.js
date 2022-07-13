import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots,price } = treatment;

    const [user] = useAuthState(auth);

    const formatedDate = format(date, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: event.target.date.value,
            patientName: event.target.name.value,
            email: event.target.email.value,
            slot: event.target.slot.value,
            price,
            number: event.target.number.value
        };
        console.log(booking);

        fetch('https://protected-garden-03211.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(`Booking Succeed! at ${formatedDate} slot ${slot}`, {
                        theme: 'colored'
                    })
                }
                else {
                    toast.error(`You have existing Appointment`, {
                        theme: 'colored'
                    })
                }
                
                setTreatment(null);
                refetch();
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <div>
                        <form onSubmit={handleBooking}>
                            <input type="text" name='date' placeholder="Type here" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs my-2" />
                            <select name='slot' className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Time</option>
                                {
                                    slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                                }
                            </select>
                            <input type="text" name='name' placeholder="Full Name" value={user?.displayName || ''} readOnly disabled className="input input-bordered w-full max-w-xs my-2" />
                            <input type="email" name='email' placeholder="Email" value={user.email} readOnly disabled className="input input-bordered w-full max-w-xs my-2" />
                            <input type="text" name='number' placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-2" />
                            <input type="submit" className="w-full max-w-xs my-2 btn " value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;