import React, { useEffect, useState } from 'react';
import './UseReview.css'
import UserReviewCard from './UserReviewCard';

const UserReviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then( data => setReviews(data))
    },[])


    return (
        <section>
            <h1 className="text-3xl text-center">  Our Client Says ! </h1>
            <div class="divider"></div> 
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-12">
                {
                    reviews?.map((review,index) =><UserReviewCard review={review} key={index} />)
                }
            </div>

        </section>
    );
};

export default UserReviews;