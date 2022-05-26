import React from 'react';
import PartsCard from './PartsCard';
import { FaTools } from 'react-icons/fa';
import useParts from '../../../hooks/useParts';
import Loading from '../../../Shared/Loading/Loading';

const Parts = () => {

    const { parts,isLoading } = useParts()



    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <div className="flex justify-center w-100 mt-16 text-primary">
                <FaTools className='text-5xl text-center' />
            </div>
            <h1 className='text-4xl font-bold text-center mb-12 mt-4 text-secondary px-8'>Our best selling parts</h1>
            <div className="divider"></div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-12 gap-5'>
                {
                    parts?.map((part, index) => <PartsCard part={part} key={index} />)
                }

            </div>
        </>
    );
};

export default Parts;