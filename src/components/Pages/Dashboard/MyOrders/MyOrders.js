import React from 'react';
import { useQuery } from 'react-query';

const MyOrders = () => {

    const { isLoading, error, data } = useQuery('parts', () =>
    fetch('http://localhost:5000/order').then(res =>
      res.json()
    )
  )
    return (
        <div>
            this is order page {data.length}
        </div>
    );
};

export default MyOrders;