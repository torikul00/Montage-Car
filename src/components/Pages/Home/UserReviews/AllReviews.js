import React, { useEffect, useState } from 'react';
import UserReviewCard from './UserReviewCard';

const AllReviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then( data => setReviews(data))
    },[])

    return (
        <div>
             <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-12">
                {
                    reviews?.map((review,index) =><UserReviewCard review={review} key={index} />)
                }
            </div>
        </div>
    );
};

export default AllReviews;