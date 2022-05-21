import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [myAppointment, setMyAppointment] = useState([]);

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/booking?email=${email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/login');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setMyAppointment(data);
            })
    }, [user]);
    let serial = 1;
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