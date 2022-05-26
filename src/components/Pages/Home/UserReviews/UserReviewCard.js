import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillStar } from 'react-icons/ai';
import auth from '../../../Shared/firebase.init';

const UserReviewCard = ({ review }) => {
    const  [user] = useAuthState(auth);
    const userName = user?.displayName
  
    const { name, reviewMessage, image } = review
    return (

        <div className="card bg-secondary shadow-xl text-base-100">
            <figure>
                <div className="avatar mt-8">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt={userName} />
                    </div>
                </div>

            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{reviewMessage}</p>
                <div className='flex'>

                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                    <AiFillStar className='star' />
                </div>
            </div>
        </div>

    );
};

export default UserReviewCard;