import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import ManageOrderCard from './ManageOrderCard';

const ManageAllOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('allOrders', () => fetch('https://stormy-spire-75562.herokuapp.com/allOrders', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-6 m-12'>
            {
                orders?.map((order, index) => <ManageOrderCard order={order} key={index} />)
            }
        </div>
    );
};

export default ManageAllOrders;