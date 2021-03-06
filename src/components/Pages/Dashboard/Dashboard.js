import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin';
import auth from '../../Shared/firebase.init';
import { CgProfile } from 'react-icons/cg';
import { MdManageAccounts, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { BsPlusSquareFill } from 'react-icons/bs';
import { VscFeedback } from 'react-icons/vsc';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
            <label for="dashboard-menu" className="btn my-8 btn-primary drawer-button lg:hidden">Dashboard Menu</label>
                <div >
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label for="dashboard-menu" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-secondary text-base-content text-base-100">


                    <li> <Link className='text-base-100' to='/dashboard'><CgProfile className='text-3xl ' /> My Profile</Link></li>
                    {!admin && <li><Link className='text-base-100' to='/dashboard/myOrders'> <FaShoppingCart className='text-2xl' /> My orders</Link></li>}
                    {!admin && <li><Link className='text-base-100' to='/dashboard/feedback'> <VscFeedback className='text-3xl' /> Give a feedback</Link></li>}

                    {admin && <li><Link className='text-base-100' to='/dashboard/users'><MdManageAccounts className='text-3xl' />  Manage Users</Link></li>}
                    {admin && <li><Link className='text-base-100' to='/dashboard/manageAllOrders'><FaShoppingCart className='text-2xl' /> Manage All Orders</Link></li>}
                    {admin && <li><Link className='text-base-100' to='/dashboard/addAproduct'> <BsPlusSquareFill className='text-2xl' /> Add A Product</Link></li>}
                    {admin && <li><Link className='text-base-100' to='/dashboard/manageProducts'><MdOutlineProductionQuantityLimits className='text-3xl' /> Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;