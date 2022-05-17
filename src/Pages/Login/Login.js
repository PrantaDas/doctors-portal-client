import React from 'react';
import Footer from '../Footer/Footer'

const Login = () => {
    return (
        <div>
            <div className='flex justify-center h-[70vh] items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold text-sm">Email</span>
                            </label>
                            <input type="email" placeholder="Type Your Email" class="input input-bordered w-full max-w-sm" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold text-sm">Password</span>
                            </label>
                            <input type="password" placeholder="Type Your Password" class="input input-bordered w-full max-w-sm" />
                            <label class="label">
                                <span class="label-text text-xs hover:underline hover:text-red-700" role='button'>Forget Password?</span>
                            </label>
                            <input className='btn bg-accent tracking-wide text-lg' type="submit" value="LOGIN" />
                            <p className='py-2'><small className='font-bold px-1'>New to Doctors Portal?</small><small className='text-secondary hover:underline' role='button'>Create new account</small></p>
                        </div>
                        <div class="divider">OR</div>
                    </form>
                    <div>
                        {/* <button class="btn btn-outline btn-block bg-white text-black text-xl font-normal">CONTINUE WITH GOOGLE</button> */}
                        <button class="btn btn-active btn-ghost btn-block tracking-wide text-lg">CONTINUE WITH GOOGLE</button>

                    </div>
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </div>
        
    );
};

export default Login;