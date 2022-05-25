import React from 'react';
import { toast } from 'react-toastify';

const UserCard = ({ user, refetch }) => {
    const { email, role } = user

    const handleAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                refetch()
                toast.success(`${email} make admin successful`)
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
                        : <button onClick={handleAdmin} class="btn btn-primary">Make Admin</button>
                    }



                    <button class="btn btn-primary">Delete User</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;