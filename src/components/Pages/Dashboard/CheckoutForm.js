import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ product }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [paymentError, setPaymentError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [paySuccess, setPaysuccess] = useState('')
    const {productPrice, productName, email, userName} = product
    const [transactionID,settransactionID] = useState('')


   
    
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
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

        
        const { paymentIntent, error: error } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name:userName,
                        email: email
                        
                    },
                },
            },
        );

        if (error) {
            setPaymentError(error?.message)
            setPaysuccess('')
        }
        else {
            setPaymentError('')
            console.log(paymentIntent)
            settransactionID(paymentIntent.id)
            setPaysuccess('Your payment is completed')
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
                {paySuccess && <p className='text-green-400 my-4'>{paySuccess}</p>}
               {transactionID && <p className='text-green-400 my-4'> Transaction Id : {transactionID}</p>}
                <button className='btn btn-secondary text-base-100 block mx-auto my-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </>
    );
};

export default CheckoutForm;