import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [myAppointment, setMyAppointment] = useState([]);

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email;
        const url = `https://protected-garden-03211.herokuapp.com/booking?email=${email}`;
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
                        <th>Payment</th>
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
                                <td>{(m.price && !m.paid) && <Link to={`/dashboard/payment/${m._id}`}><button class="btn btn-xs">PAY</button></Link>}
                                {(m.price && m.paid) &&<button class="btn btn-xs">PAID</button>}
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;