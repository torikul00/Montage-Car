import React from 'react';
import notFound from '../../../images/notFound.png'
const NotFound = () => {
    return (
        <div className='w-full h-screen flex justify-center'>
          <img className='w-1/2 ' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;