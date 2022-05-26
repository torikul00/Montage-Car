import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../Shared/firebase.init';
import Loading from '../../../Shared/Loading/Loading';


const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { data,isLoading,refetch } = useQuery('user', () => fetch(`http://localhost:5000/user/${user.email}`).then(res => res.json()))


    const handleSubmit = (event) => {
        event.preventDefault()
        const image = event.target.image.value
        const address = event.target.address.value
        const city = event.target.city.value
        const profession = event.target.profession.value
        const phone = event.target.phone.value
        const userUpdateData = { image, address, city, profession, phone }

        fetch(`http://localhost:5000/userUpdate/${user.email}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userUpdateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    toast.success('Profile Updated')
                }
                
            })


    }

    if (isLoading) {
        return <Loading/>
    }
    return (
        <div className="prifile-container m-12 border shadow-xl p-8">
            <div>
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src={data.image?data.image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0Q7C35IjUnEFF1XDxd0hb6MHNNmRb3N3Ig&usqp=CAU"} alt='User Profile' />

                    </div>


                </div>
            </div>

            <div className="user-info-container">
                <h1 className='text-3xl '> Name :  {user?.displayName}</h1>
                <h1 className='text-3xl mb-8'> Email :  {user?.email}</h1>
                <div className="divider"></div>
                <h1 className='text-2xl'> Address :  {data?.address}</h1>
                <h1 className='text-2xl'> City :  {data?.city}</h1>
                <h1 className='text-2xl'> Profession :  {data?.profession}</h1>
                <h1 className='text-2xl'> Phone Number :  {data?.phone}</h1>
                
            </div>
            <div className="update-profile-form">
                <h1 className="text-3xl text-primary mt-12"> Update Your Profile</h1>
                <form onSubmit={handleSubmit}>
                    <input required  name='image' type="text" placeholder="Image URL" class="m-4 input input-bordered input-primary w-full max-w-xs" />

                    <input required  name='address' type="text" placeholder="Address" class="m-4 input input-bordered input-primary w-full max-w-xs" />

                    <input required  name='city' type="text" placeholder="City" class="m-4 input input-bordered input-primary w-full max-w-xs" />

                    <input required  name='profession' type="text" placeholder="Profession" class="m-4 input input-bordered input-primary w-full max-w-xs" />

                    <input  required name='phone' type="text" placeholder="Phone Number" class="m-4 input input-bordered input-primary w-full max-w-xs" />
                    <button type='submit' className='btn btn-primary block mx-auto'> Update profile</button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;