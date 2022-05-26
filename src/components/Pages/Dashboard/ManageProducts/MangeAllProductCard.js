import React from 'react';
const MangeAllProductCard = ({ part,setPartModalInfo }) => {

    const { name, description, image, price } = part
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className='w-28' src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center">
                <h2 class="card-title">{name}</h2>
                <h2 class="card-title"> Price : ${price}</h2>
                
                <p>{ description}</p>
                <div class="card-actions">
                   
                    <label onClick={()=>setPartModalInfo(part)} for="part-modal" class="btn btn-primary">Delete</label>
                </div>
            </div>
        </div>
    );
};

export default MangeAllProductCard;