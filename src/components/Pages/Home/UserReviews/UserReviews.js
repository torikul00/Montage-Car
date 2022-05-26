import React, { useEffect, useState } from 'react';
import './UseReview.css'
import UserReviewCard from './UserReviewCard';
import { useNavigate } from 'react-router-dom';


const UserReviews = () => {
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://stormy-spire-75562.herokuapp.com/review', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then( data => setReviews(data))
    },[])
    
    return (
        <section>
        
            <h1 className="lg:text-5xl text-3xl text-center font-bold text-secondary">  Our Client Says ! </h1>
            <div className="divider"></div> 
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-12">
                {
                    reviews?.map((review,index) =><UserReviewCard review={review} key={index} />).reverse().slice(0,3)
                }
            </div>
            <button onClick={()=>navigate('/allReviews')} className='btn btn-secondary btn-lg mx-auto block mb-12 text-base-100'> View All Reviews </button>

        </section>
    );
};

export default UserReviews;