import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CheckoutForm = ({ product }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [paymentError, setPaymentError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    
  
   
    const navigate = useNavigate()



    const { productPrice, productName, email, userName, _id } = product
    useEffect(() => {
        fetch('https://stormy-spire-75562.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({ productPrice })
        })
            .then(res => res.json())
            .then(data => {

                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [productPrice])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error: Payerror } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (Payerror) {

            setPaymentError(Payerror.message)
        }
        else {
            setPaymentError('')
        }


        const { paymentIntent, error } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email

                    },
                },
            },
        );

        if (error) {
            setPaymentError(error?.message)
           
        }
        else {
            setPaymentError('')

            //  set paymnet information to backend
            const paymentData = {
                transactionId: paymentIntent.id,
                productId: _id,
                productName: productName,
                userEmail: email
            }
            fetch(`https://stormy-spire-75562.herokuapp.com/update/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentData)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Payment Successful')
                    navigate('/dashboard/myOrders')
                })

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
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
               
                <button className='btn btn-secondary text-base-100 block mx-auto my-8' type="submit" disabled={!stripe}>
                    Pay Now
                </button>
            </form>
        </>
    );
}


export default CheckoutForm;