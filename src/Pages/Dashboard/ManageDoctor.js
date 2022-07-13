import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const ManageDoctor = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://protected-garden-03211.herokuapp.com/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return (<p className='text-primary'>Loading...</p>)
    }

    const handleRemoveDoctor = (email) => {
        const confirmation = window.confirm('Are you sure to delete?');
        if (confirmation) {
            const url = `https://protected-garden-03211.herokuapp.com/doctors/${email}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        console.log(data);
                        toast.success('Deleted Successfully', {
                            theme: 'colored'
                        })
                        refetch();
                    }
                })
        }
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avator</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((d, index) => <tr key={d._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src={d.img} alt='ddoctor avator' />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Dr.{d.name}</td>
                                <td>{d.specialist}</td>
                                <td><button onClick={() => handleRemoveDoctor(d.email)} class="btn btn-xs btn-error">REMOVE</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;