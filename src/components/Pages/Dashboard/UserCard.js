import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const UserCard = ({ user, refetch, setUsereModalInfo }) => {
    const { email, role } = user

    const handleAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You have no permission to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount) {

                    refetch()
                    toast.success(`${email} make admin successful`)
                }
            })
    }

    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>{email}</p>


                <div class="card-actions justify-end">
                    {role === 'admin' ? <p className='font-bold'>Already Admin</p>
                        : <button onClick={handleAdmin} class="btn btn-sm btn-secondary text-base-100">Make Admin</button>
                    }
                  
                    <label onClick={() => setUsereModalInfo(user)} for="delete-modal" class="btn bg-red-600 btn-sm text-base-100">Delete</label>
                </div>
            </div>
        </div>
    );
};

export default UserCard;