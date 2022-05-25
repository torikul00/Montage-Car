import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin';
import auth from '../../Shared/firebase.init';
const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center ">

                <div >
                    <Outlet />
                </div>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-primary text-base-content">


                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {!admin && <li><Link to='/dashboard/myOrders'>My orders</Link></li>}
                    {!admin && <li><Link to='/dashboard/feedback'>Give a feedback</Link></li>}
                    
                    {admin && <li><Link to='/dashboard/users'>Manage Users</Link></li>}
                    {admin && <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>}
                    {admin && <li><Link to='/dashboard/addAproduct'>Add A Product</Link></li>}
                    {admin && <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;