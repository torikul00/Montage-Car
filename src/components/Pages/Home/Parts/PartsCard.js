import React from 'react';

const PartsCard = ({ part }) => {
    const { name, description, image,price } = part
    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <h2 class="card-title"> $ {price}</h2>
                
                <p>{ description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;