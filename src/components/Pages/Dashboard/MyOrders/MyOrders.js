import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import OrderCard from './OrderCard';

const MyOrders = () => {

  const { isLoading, error, data: orders } = useQuery('parts', () =>
    fetch('http://localhost:5000/order').then(res =>
      res.json()
    )
  )
  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      {
        orders?.map(order => <OrderCard order={order} key={order._id} />)
      }
     
      
    </div>
  );
};

export default MyOrders;