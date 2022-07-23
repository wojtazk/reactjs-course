import { useCallback, useState } from 'react';

/**
 *
 * @returns [getMeals, isLoading, error]
 */
const useFetchMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getMeals = useCallback(async function () {
    try {
      const response = await fetch(
        'https://test-app-806e6-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
        { method: 'GET' }
      );

      if (!response.ok) {
        setIsLoading(false);
        throw new Error('Couldnt fetch meals!');
      }

      const data = await response.json();
      setIsLoading(false);

      const meals = [];
      for (const key in data) {
        const value = data[key];
        meals.push({
          id: key,
          name: value.name,
          description: value.description,
          price: value.price,
        });
      }

      return meals;
    } catch (err) {
      setError(true);
      setErrorMessage(err.message || 'Something went wront');

      throw err;
    }
  }, []);

  return [getMeals, isLoading, error, errorMessage];
};

export default useFetchMeals;
