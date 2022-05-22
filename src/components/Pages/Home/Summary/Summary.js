import React from 'react';
import './Summary.css'
import { BsPeopleFill,BsBuilding } from 'react-icons/bs';
import {MdReviews } from 'react-icons/md';
const Summary = () => {
    return (
        <div className='summary-contaier'>
            <div className='overly grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1'>

                <div className='flex justify-center items-center flex-col'>
                    <BsPeopleFill className='text-6xl text-primary' />
                        <h1 className='text-4xl my-4'>232+</h1>
                        <h1 className='text-2xl'>Happy Customers</h1>
                </div>

                <div className='flex justify-center  items-center flex-col'>
                    <BsBuilding className='text-6xl text-primary' />
                        <h1 className='text-4xl my-4'>12+</h1>
                        <h1 className='text-2xl'>Branches</h1>
                </div>
                 <div className='flex justify-center items-center flex-col'>
                    <MdReviews className='text-6xl text-primary' />
                        <h1 className='text-4xl my-4'>1302+</h1>
                        <h1 className='text-2xl'>Positive Review</h1>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <BsPeopleFill className='text-6xl text-primary' />
                        <h1 className='text-4xl mt-4'>14+</h1>
                        <h1 className='text-2xl'>Partner Companies</h1>
                </div>

            </div>

        </div>
    );
};

export default Summary;