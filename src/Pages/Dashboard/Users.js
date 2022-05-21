import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return (<p className='text-secondary'>Loading....</p>)
    }
    let s = 1;

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Admin Appointed', {
                        theme: 'colored'
                    })
                    refetch();
                }
                else {
                    toast.error("Your don't have the access to appoint admin", {
                        theme: 'colored'
                    });
                }
            })
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Access</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <tr key={user._id} >
                            <th>{s++}</th>
                            <td>{user.email}</td>
                            <td>{user.role !== 'admin' ? <button onClick={() => makeAdmin(user.email)} class="btn btn-xs">Make Admin</button> : <button class="btn btn-xs">Appointed</button>}</td>
                            <td><button class="btn btn-xs">Remove User</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Users;