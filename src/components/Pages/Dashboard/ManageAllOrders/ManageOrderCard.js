import React from 'react';

const ManageOrderCard = ({ order }) => {
    const { userName, productName, productImage, paid } = order
    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={productImage} alt="Shoes" class="rounded-xl" />

            </figure>
            <div class="card-body items-center text-center">

                <p>{productName}</p>
                <h2 class=""> Name : {userName}</h2>

                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ManageOrderCard;