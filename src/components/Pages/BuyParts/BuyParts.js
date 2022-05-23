import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const BuyParts = () => {
    const { id } = useParams()
    
    const { data, isLoading } = useQuery('buyPart', () => 
        fetch(`http://localhost:5000/parts/${id}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>

            {data.name}
            
        </div>
    );
};

export default BuyParts;