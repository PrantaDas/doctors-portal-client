import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-secondary text-3xl font-bold uppercase pb-4'>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link className='font-normal' to='/dashboard'>My Appointment</Link></li>
                        <li><Link className='font-normal' to='/dashboard/myreview'>My Review</Link></li>
                        {admin && <>
                            <li><Link className='font-normal' to='/dashboard/users'>All Users</Link></li>
                            <li><Link className='font-normal' to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                        </>}
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;