import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';

const AddDoctor = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const { data: specialties, isLoading, refetch } = useQuery('specialties', () =>
        fetch('http://localhost:5000/services').then(res => res.json())
    );

    const imageStorageKey = '13d66fdfa125a0e2cda7711f3b4b3c15';
    // console.log(specialties)
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('imgbb', result);
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialist: data.specialist,
                        img
                    };
                    // sending data to database

                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                    .then(res=>res.json())
                    .then(inserted=>{
                        console.log(inserted);
                        if(inserted.insertedId){
                            toast.success('Successfully Added',{
                                theme:'colored'
                            })
                        }
                    })
                }
                reset();
            })
        console.log(data);
    }
    if (isLoading) {
        return (<p className='text-secondary'>Loading....</p>);
    };
    return (
        <div>
            <div className='flex justify-center h-[90vh] items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Add a Doctor</h2>
                        <form form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-sm">Name</span>
                                </label>
                                <input type="text" {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                                    // name='name'
                                    placeholder="Type Your Name"
                                    className="input input-bordered w-full max-w-sm"
                                    autoComplete='off'
                                />

                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-sm">Email</span>
                                </label>
                                <input type="email" {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        ,
                                        message: 'Please Provide a valid email'
                                    }
                                })}
                                    name='email'
                                    placeholder="Type Your Email"
                                    className="input input-bordered w-full max-w-sm"
                                    autoComplete='off'
                                />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-sm">Specialist</span>
                                </label>
                                <select {...register('specialist')} class="select select-bordered w-full max-w-xs">
                                    {
                                        specialties.map(s => <option key={s._id} value={s.name}>{s.name}</option>)
                                    }
                                </select>
                                <label className="label">
                                    {errors.specialist?.type === 'required' && <span className="label-text-alt text-red-700">{errors.specialist.message}</span>}
                                </label>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-bold text-sm">Upload Photo</span>
                                    </label>
                                    <input type="file" {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                        // name='name'
                                        className="input input-bordered block w-full text-sm py-1 text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-violet-50 file:text-violet-700
                                    hover:file:bg-violet-100"
                                        autoComplete='off'
                                    />

                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.image.message}</span>}
                                    </label>
                                </div>
                                <input className='btn bg-accent tracking-wide text-lg' type="submit" value="ADD" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddDoctor;