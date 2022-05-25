import React from 'react';
import { AiOutlineFall } from 'react-icons/ai';
const Associated = () => {
    return (
        <div className='my-20 text-center'>
            <h1 className='uppercase md:text-4xl lg:text-4xl text-xl text-secondary font-bold'>
                <AiOutlineFall className='text-secondary text-5xl inline mx-4' />
                associated with brands
                <AiOutlineFall className='text-secondary text-5xl inline mx-4' />
            </h1>
            <img className='block mx-auto' src='https://autodoc.templines.org/new/wp-content/uploads/2020/09/brands002.jpg' alt="" />
        </div>
    );
};

export default Associated;