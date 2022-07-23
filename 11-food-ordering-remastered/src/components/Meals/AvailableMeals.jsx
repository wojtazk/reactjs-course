import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useFetchMeals from '../../hooks/useFetchMeals';
import { useCallback, useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [mealsList, setMealsList] = useState([]);
  const [getMeals, isLoading, error, errorMessage] = useFetchMeals();

  const fetchMeals = useCallback(async () => {
    try {
      const loadedMeals = await getMeals();

      setMealsList(
        loadedMeals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))
      );
    } catch (err) {
      console.error(err);
    }
  }, [getMeals]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <>
      {!isLoading && !error && (
        <section className={classes.meals}>
          <Card>
            <ul>{mealsList}</ul>
          </Card>
        </section>
      )}

      {isLoading && (
        <section className={classes.meals}>
          <p className={classes['meals-loading']}>Loading meals...</p>
        </section>
      )}

      {error && (
        <section className={classes.meals}>
          <p className={classes['meals-error']}>
            Something went wrong ({errorMessage})
            <button onClick={fetchMeals}>Try again!</button>
          </p>
        </section>
      )}
    </>
  );
};

export default AvailableMeals;
