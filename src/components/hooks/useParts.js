
import { useQuery } from 'react-query';

const useParts = () => {

  const { isLoading, data: parts, refetch } = useQuery('parts', () =>
    fetch('https://stormy-spire-75562.herokuapp.com/parts', {
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