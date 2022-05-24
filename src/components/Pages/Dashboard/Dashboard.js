import React from 'react';
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center ">
                {/* <!-- Page content here --> */}
                <div >
                    <Outlet />
                </div>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-primary text-base-content">
                    {/* <!-- Sidebar content here --> */}


                    <li><Link to='/dashboard'>My orders</Link></li>
                    <li><Link to='/dashboard/feedback'>Give a feedback</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;