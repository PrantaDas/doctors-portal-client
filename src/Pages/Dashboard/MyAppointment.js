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
    }, [user])
    return (
        <div>
            <p>my appointment;{myAppointment.length}</p>
        </div>
    );
};

export default MyAppointment;