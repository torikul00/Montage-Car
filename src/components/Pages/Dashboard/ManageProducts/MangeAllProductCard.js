import React from 'react';
const MangeAllProductCard = ({ part,setPartModalInfo }) => {

    const { name, description, image, price } = part
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className='w-28 rounded-xl' src={image} alt="Shoes"  />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title"> Price : ${price}</h2>
                
                <p>{ description}</p>
                <div className="card-actions">
                   
                    <label onClick={()=>setPartModalInfo(part)} for="part-modal" className="btn btn-primary">Delete</label>
                </div>
            </div>
        </div>
    );
};

export default MangeAllProductCard;