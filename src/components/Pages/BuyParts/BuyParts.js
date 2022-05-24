import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../Shared/firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './BuyParts.css'
import { BsPlusSquare } from 'react-icons/bs';
import { FiMinusSquare } from 'react-icons/fi';
import { toast } from 'react-toastify';

const BuyParts = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const { data, isLoading } = useQuery('buyPart', () =>
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    const { name, description, image, price, min_quantity, avai_quantity, _id } = data
    const intMinQuantity = parseInt(min_quantity)
    const intAvaiQuantity = parseInt(avai_quantity)

    const handleOrder = (e) => {
        e.preventDefault()
        const email = user.email
        const userName = e.target.userName.value
        const productName = e.target.productName.value
        const phoneNumber = e.target.phoneNumber.value
        const address = e.target.address.value
        const quantity = e.target.quantity.value
        const orderData = { email, userName, productName, phoneNumber, address, quantity }


        if (quantity < 0) {
            alert('Invalid quntity')
        }
        else if (quantity < intMinQuantity) {

            alert(`Minimum limit ${intMinQuantity}`)
        }

        else if (quantity > intAvaiQuantity) {

            alert(`Highest limit ${intAvaiQuantity}`)
        }
        else {

            fetch('http://localhost:5000/part', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Order placed')
                        e.target.reset()

                    }
                })
        }
    }


    return (
        <section className='single-product-container'>

            <div className="single-product-card">
                <div className='product-card'>
                    <img src={image} alt="" />

                    <h3 className='text-2xl font-bold'>Available : {avai_quantity}</h3>
                    <h3 className='text-2xl font-bold'>Minimum Quantity :  {min_quantity}</h3>

                </div>
                <div className='buy-product ml-8'>
                    <form onSubmit={handleOrder} className=' mx-auto'  >
                        <h2 className="text-3xl font-bold my-4">Place your order now</h2>
                        <input name='userName' type="text" disabled value={user.displayName} class="input input-bordered input-md w-full max-w-xs my-2" />
                        <input name='email' type="text" disabled value={user.email} class="input input-bordered input-md w-full max-w-xs my-2" />
                        <input name='productName' type="text" disabled value={name} class="input input-bordered input-md w-full max-w-xs my-2" />
                        <input name='address' required placeholder='Address' type="text" class="input input-bordered input-md w-full max-w-xs" />
                        <input name='phoneNumber' required type="number" placeholder="Phone Number" class="input input-bordered input-md w-full max-w-xs my-2" />
                        <input name='quantity' required type="number" placeholder="Quantity" class="input input-bordered input-md w-full max-w-xs my-2" />
                        <button type='submit' className='btn btn-primary block mx-auto'>Place Now</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default BuyParts;