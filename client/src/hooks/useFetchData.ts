import { useEffect, useState } from 'react';

export const useFetchData = <TData>(fetchCb: () => Promise<TData[]>) => {
  const [data, setData] = useState<TData[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 500);
    fetchCb()
      .then(setData)
      .catch(setError)
      .finally(() => {
        clearTimeout(timer);
        setIsLoading(false);
      });
  }, [fetchCb]);

  return {
    data,
    error,
    isLoading,
  };
};
