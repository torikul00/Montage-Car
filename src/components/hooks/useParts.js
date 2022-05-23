
import { useQuery } from 'react-query';
 
const useParts = () => {
    
    const { isLoading, error, data:parts } = useQuery('parts', () =>
    fetch('http://localhost:5000/parts').then(res =>
      res.json()
    )
  )

    return {parts,isLoading,error}
};

export default useParts;