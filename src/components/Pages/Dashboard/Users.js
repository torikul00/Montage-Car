import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteUsermModal from '../../Shared/DeleteUserModal'
import Loading from '../../Shared/Loading/Loading';

import UserCard from './UserCard';

const Users = () => {
    const [usereModalInfo, setUsereModalInfo] = useState(null)
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://stormy-spire-75562.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-8'>

                {
                    users?.map((user, index) =>
                        <UserCard
                        setUsereModalInfo={setUsereModalInfo}
                            refetch={refetch}
                            user={user}
                            key={index} />)
                }

            </div>
            {usereModalInfo && <DeleteUsermModal setUsereModalInfo={setUsereModalInfo}   refetch={refetch} user={usereModalInfo}  />}
        </>
    );
};

export default Users;