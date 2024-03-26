import { useState } from 'react';

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    try {
      setIsLoading(true)
      const response = await fetch(url,options);
      setStatus(response.status)
      const jsonData = await response.json();
      setData(jsonData);

    } catch (error) {
      setError(error)

    } finally {
      setIsLoading(false);
    }
  };

  return { data, isloading, error, status, fetchData };
};

export default useFetchData;