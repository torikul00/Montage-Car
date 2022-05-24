import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({price}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [paymentError, setPaymentError] = useState('')
    const [clientSecret,setClientSecret] = useState('')


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent'{
            method: 'POST',
            'content-type:': 'application/json',
            
            body:JSON.stringify()
        })
        .then(res => res.json())
            .then(data => {
            
        })


    },[price])



    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('click')
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
          
            setPaymentError(error.message)
        }
        else {
            setPaymentError('')
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {paymentError && <small className='text-red-400 my-4'>{paymentError}</small>}
                <button className='btn btn-secondary text-base-100 block mx-auto my-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </>
    );
};

export default CheckoutForm;