import React from 'react';

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
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default UserReviewCard;