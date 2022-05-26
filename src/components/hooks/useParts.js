
import { useQuery } from 'react-query';

const useParts = () => {

  const { isLoading, data: parts, refetch } = useQuery('parts', () =>
    fetch('http://localhost:5000/parts', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res =>
      res.json()
    )
  )
  return { parts, isLoading, refetch }
};

export default useParts;