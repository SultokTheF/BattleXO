import { useState, useEffect } from 'react';

const useDelayedLoading = (initialDelay: number, loadingTime: number) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate longer async operation, e.g., fetching data
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, loadingTime);

    // Clean up function
    return () => {
      clearTimeout(delay);
    };
  }, [loadingTime]);

  useEffect(() => {
    // Initial delay before starting the loading
    const initialDelayTimeout = setTimeout(() => {
      setLoading(true);
      clearTimeout(initialDelayTimeout);
    }, initialDelay);

    // Clean up function for the initial delay
    return () => {
      clearTimeout(initialDelayTimeout);
    };
  }, [initialDelay]);

  return loading;
};

export default useDelayedLoading;
