import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L2phKSFM9fnj68rq0yPZlIwHZFhpjkGm9EEHav50Uhk9ByRcTMRTnQhPBP3VD2k1pjPr5A37pLg1kpiyALeMDRY003bI2LvCI');

const OrderCard = ({ order }) => {
    const { productName, productPrice, quantity, productImage } = order
    return (
        <>
            <div>
                <div>
                    <img src={productImage} alt="" />
                    <h2>{productName}</h2>
                    <p> Price : ${productPrice}</p>

                    {(productPrice) && <label for="pay-modal" class="btn btn-secondary text-base-100 ">Pay Now</label>}


                </div>

            </div>



            <input type="checkbox" id="pay-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="pay-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={productPrice} />
                    </Elements>
                    
                </div>

            </div>
        </>
    );
};

export default OrderCard;