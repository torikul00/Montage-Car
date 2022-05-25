import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../Dashboard/CheckoutForm';
const stripePromise = loadStripe('pk_test_51L2wVpFudOlYCIZ3nDd23qIYPQ1fJrjMqdhixxIMcmMtg5xnBqaK5wAlNu1kvN3jGX9jA35czl0ZvFCPmEA4fYqw00LIMI2l1j')

const Payment = () => {

    const { id } = useParams()

    const url = `http://localhost:5000/singleItem/${id}`

    const { data, isLoading } = useQuery(['product', id], () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    const { productName, productPrice } = data
    return (

        <div>
            <h1 className="text-3xl">Confirm Your Order</h1>
            <div>
                <h1> Product  : {productName}</h1>
                <h1>Price : {productPrice}</h1>
            </div>
            <div className='border my-4 w-96 p-4'>
            <Elements stripe={stripePromise}>
                <CheckoutForm product={data} />
            </Elements>
            </div>
        </div>
    );
};

export default Payment;