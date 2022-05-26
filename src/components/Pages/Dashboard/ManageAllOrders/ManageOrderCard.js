import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
const ManageOrderCard = ({ order }) => {
    const { userName, productName, productImage, paid } = order
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={productImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">

                <p className='font-bold'>{productName}</p>
                <h2 className="font-bold">User name : {userName}</h2>
                {paid ? <h2 className=''> <AiFillCheckCircle className='inline text-xl text-green-600 font-bold' /> Paid</h2>
                    :
                <p className='font-bold'>Unpaid</p> 
            }
                <div className="card-actions">
                    <button className="btn btn-primary">Shift</button>
                </div>
            </div>
        </div>
    );
};

export default ManageOrderCard;