import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Shared/firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import OrderCard from './OrderCard';

const MyOrders = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  
  const userEmail = user?.email
  const { isLoading, data: orders } = useQuery('orders', () =>
    fetch(`http://localhost:5000/order/${userEmail}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.json() )
  )
  if (isLoading) {

    return <Loading />
  }

  if (orders?.length === 0) {
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