import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { css } from "@emotion/react";
import { BeatLoader } from 'react-spinners';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [color, setColor] = useState('#19D3AE');

    const location = useLocation();

    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const override = css`
        margin:0,auto;
    `;


    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignWithGoogle = () => {
        signInWithGoogle();
    };

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };

    if (user || user1) {
        navigate(from, { replace: true });
    };

    if (loading || loading1) {
        return (<BeatLoader css={override} color={color} speedMultiplier={2} size={25} />)
    };

    let signInError;
    let gError;;

    if (error1) {
        const errorMessage = error1.message;
        console.log(errorMessage);
        if (errorMessage.includes('auth/user-not-found')) {
            signInError = <small className='py-2 text-red-700'>User Not Found</small>;
        };
        if (errorMessage.includes('auth/wrong-password')) {
            signInError = <small className='py-2 text-red-700'>Invalid Password</small>;
        };
    };
    return (
        <div>
            <div className='flex justify-center h-[70vh] items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Login</h2>
                        <form form onSubmit={handleSubmit(onSubmit)}>
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
                                />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-sm">Password</span>
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
                                    className="input input-bordered w-full max-w-sm"
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                </label>
                                <label className="label">
                                    <span className="label-text text-xs hover:underline hover:text-red-700" role='button'>Forget Password?</span>
                                </label>
                                <input className='btn bg-accent tracking-wide text-lg' type="submit" value="LOGIN" />
                                {
                                    signInError
                                }
                                <p className='py-2'><small className='font-bold px-1'>New to Doctors Portal?</small><small className='text-secondary  hover:underline' role='button'><Link to='/register'>Create new account</Link></small></p>
                            </div>

                        </form>
                        <div className="divider">OR</div>
                        <div>
                            <button onClick={handleSignWithGoogle} className="btn btn-active btn-ghost btn-block tracking-wide text-lg">CONTINUE WITH GOOGLE</button>

                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Login;