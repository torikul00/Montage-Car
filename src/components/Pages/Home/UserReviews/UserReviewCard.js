import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const UserReviewCard = ({ review }) => {
    const { name, description, image } = review
    return (

        <div class="card bg-secondary shadow-xl text-base-100">
            <figure>
                <div class="avatar mt-8">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='User Profile'/>
                    </div>
                </div>

            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{ description}</p>
                <div className='flex'>
               
                <AiFillStar className='star' />
                <AiFillStar className='star'/>
                <AiFillStar className='star' />
                <AiFillStar className='star' />
                <AiFillStar className='star' />
               </div>
            </div>
        </div>

    );
};

export default UserReviewCard;