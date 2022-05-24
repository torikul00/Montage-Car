import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import OrderCard from './OrderCard';

const MyOrders = () => {

  const { isLoading, data: orders } = useQuery('parts', () =>
    fetch('http://localhost:5000/order').then(res =>
      res.json()
    )
  )
  if (isLoading) {

    return <Loading />
  }

  if (orders.length == 0) {
    return <p className='text-3xl mt-12'> No Orders Yet</p>
  }

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 p-8'>
      {
        orders?.map(order => <OrderCard order={order} key={order._id} />)
      }

    </div>
  );
};

export default MyOrders;