
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../Shared/firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import OrderCard from './OrderCard';
import OrderDeleteModal from './OrderDeleteModal';

const MyOrders = () => {
  const [user] = useAuthState(auth)

  const [orderModalInfo,setOrderModalInfo] = useState(null)

  const userEmail = user?.email
  const { isLoading, data: orders,refetch } = useQuery('orders', () =>
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
    <>
    <h1 className="text-3xl font-bold text-center text-secondary my-12">Your Orders</h1>
    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 p-8'>
      {
        orders?.map(order => <OrderCard setOrderModalInfo={setOrderModalInfo} order={order} key={order._id} />)
      }

      </div>
      {
        orderModalInfo && <OrderDeleteModal
          order={orderModalInfo}
          refetch={refetch}
          setOrderModalInfo={setOrderModalInfo}
        />
          }

      </>
    
  );
};

export default MyOrders;