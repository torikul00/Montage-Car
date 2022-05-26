import React, { useState } from 'react';
import useParts from '../../../hooks/useParts';
import MangeAllProductCard from './MangeAllProductCard';
import Loading from '../../../Shared/Loading/Loading'
import PartDeleteModal from './PartDeleteModal';


const ManageProducts = () => {

    const { parts, isLoading,refetch} = useParts()
    const [partModalInfo,setPartModalInfo]  = useState(null)
 
    
    if (isLoading) {
        <Loading />
    }
    return (
        <>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-5 p-8'>
                {
                    parts?.map(part => <MangeAllProductCard 

                        setPartModalInfo={setPartModalInfo}
                        
                        part={part} key={part._id} 
                        
                    />)
                }
            </div>
            {partModalInfo && <PartDeleteModal
            
            partModalInfo={partModalInfo}
                setPartModalInfo={setPartModalInfo}
                refetch={refetch}
            
            />}
        </>
    );
};

export default ManageProducts;