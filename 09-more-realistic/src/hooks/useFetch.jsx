import { useCallback, useState } from 'react';

/**
 *
 * @returns An array of sendRequest function, loading state & error state
 */
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (
      requestConfig = { url: '', method: '', headers: {}, body: '' },
      dataModifier = (data) => {}
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method || 'GET',
          headers: requestConfig.headers || {},
          body: JSON.stringify(requestConfig.body) || null,
        });

        if (!response.ok) {
          throw new Error('Request failed!');
        }

        const data = await response.json();
        dataModifier(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      }
      setIsLoading(false);
    },
    []
  );

  return [sendRequest, isLoading, error];
};
export default useFetch;
