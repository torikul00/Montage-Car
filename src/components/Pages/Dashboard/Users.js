import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import UserCard from './UserCard';

const Users = () => {

    const { data:users, isLoading,refetch } = useQuery('users', () => fetch('http://localhost:5000/users',{
        method:'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
          }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-8'>
            
            {
                users?.map((user,index) => <UserCard refetch={refetch}  user={user} key={index} />)
            }
            
        </div>
    );
};

export default Users;