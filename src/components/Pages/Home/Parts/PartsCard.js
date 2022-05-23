import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCard = ({ part }) => {
    const { name, description, image, price, min_quantity, avai_quantity ,_id} = part

    const navigate = useNavigate()
    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <h2 class="card-title"> $ {price}</h2>
                <p>{description}</p>
                <hr />
                <p>Min - Quantity : {min_quantity}</p>
                <p>Available - Quantity : {avai_quantity}</p>
                <div class="card-actions justify-end">
                    <button onClick={()=>navigate(`/buy-part/${_id}`)} class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;