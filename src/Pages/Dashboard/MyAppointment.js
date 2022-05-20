import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [myAppointment, setMyAppointment] = useState([]);

    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/booking?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyAppointment(data);
            })
    }, [user]);
    let serial=1;
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myAppointment.map(m =>
                            <tr key={m._id}>
                                <th>{serial++}</th>
                                <td>{m.patientName}</td>
                                <td>{m.treatment}</td>
                                <td>{m.slot}</td>
                                <td>{m.date}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;