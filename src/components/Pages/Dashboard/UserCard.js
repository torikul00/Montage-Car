import React from 'react';
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
            <figure><img className='w-36' src={user?.image ? user.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0Q7C35IjUnEFF1XDxd0hb6MHNNmRb3N3Ig&usqp=CAU'} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{ }</h2>
                <p className='font-bold'>Email : {email}</p>
                {user.address ? <p className='font-bold'>Address : {user?.address}</p>
                    :
                    <p>Adress : <span className='font-bold'> not available</span></p>
                }
                {user.city ? <p className='font-bold'>City : {user?.city}</p>
                    :
                    <p>City : <span className='font-bold'> not available</span></p>
                }

                <div class="card-actions justify-end">
                    {role === 'admin' ? <p className='font-bold text-primary'>Already admin</p>
                        : <button onClick={handleAdmin} class="btn btn-sm btn-secondary text-base-100">Make Admin</button>
                    }
                    <label onClick={() => setUsereModalInfo(user)} for="delete-modal" class="btn bg-red-600 btn-sm text-base-100"> Delete </label>
                </div>
            </div>
        </div>
    );
};

export default UserCard;