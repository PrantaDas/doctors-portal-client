import React from 'react';
import { useForm } from "react-hook-form";
import { css } from "@emotion/react";
import { BeatLoader, PacmanLoader } from 'react-spinners';
import Footer from '../Pages/Footer/Footer';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const [currentUser] = useAuthState(auth)

    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const override = css`
        margin:0,auto;
    `;

    let signError;

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
    };
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignWithGoogle = () => {
        signInWithGoogle();
    };

    if (currentUser || user) {
        console.log(currentUser);
        navigate(from, { replace: true });
    };

    if (loading) {
        return (<p className='text-secondary'>Loading</p>);
    };

    if (error || error1) {
        signError = <p>{error.message}</p>
    };

    return (
        <div>
            <div className='flex justify-center h-[90vh] items-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Sign Up</h2>
                        <form form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text font-bold text-sm">Name</span>
                                </label>
                                <input type="text" {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                                    // name='name'
                                    placeholder="Type Your Name"
                                    class="input input-bordered w-full max-w-sm"
                                />

                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-700">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text font-bold text-sm">Email</span>
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
                                    class="input input-bordered w-full max-w-sm"
                                />

                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-700">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-700">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text font-bold text-sm">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8
                                        ,
                                        message: 'Your Password Length should be atlesat 8 or more.'
                                    }
                                })}
                                    type="password"
                                    placeholder="Type Your Password"
                                    class="input input-bordered w-full max-w-sm"
                                />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-700">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-700">{errors.password.message}</span>}
                                </label>
                                <label class="label">
                                    <span class="label-text text-xs hover:underline hover:text-red-700" role='button'>Forget Password?</span>
                                </label>
                                <input className='btn bg-accent tracking-wide text-lg' type="submit" value="SIGNUP" />
                                <p className='py-2'><small className='font-bold px-1'>Already Have an Account?</small><small className='text-secondary  hover:underline' role='button'><Link to='/login'>Login Here</Link></small></p>
                            </div>
                            {
                                signError
                            }
                        </form>
                        <div class="divider">OR</div>
                        <div>
                            <button onClick={handleSignWithGoogle} class="btn btn-active btn-ghost btn-block tracking-wide text-lg">CONTINUE WITH GOOGLE</button>

                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;