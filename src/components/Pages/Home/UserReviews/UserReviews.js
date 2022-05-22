import React, { useEffect, useState } from 'react';
import './UseReview.css'
import UserReviewCard from './UserReviewCard';
import { MdManageAccounts } from 'react-icons/md';


const UserReviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then( data => setReviews(data))
    },[])


    return (
        <section>
           {/* <div className='flex justify-center text-secondary'> <MdManageAccounts className='text-6xl ' /></div> */}
            <h1 className="text-5xl text-center font-bold text-secondary">  Our Client Says ! </h1>
            <div class="divider"></div> 
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-12">
                {
                    reviews?.map((review,index) =><UserReviewCard review={review} key={index} />)
                }
            </div>
            <button className='btn btn-secondary btn-lg mx-auto block mb-12 text-base-100'>View All Reviews</button>

        </section>
    );
};

export default UserReviews;