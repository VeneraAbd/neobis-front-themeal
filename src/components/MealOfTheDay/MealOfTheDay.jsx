
import { Link } from 'react-router-dom';
import styles from './MealOfTheDay.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MealOfTheDay = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        setRandomMeal(response.data.meals[0]);
      } catch (error) {
        console.log('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {randomMeal ? (
        <section className={styles.container}>
          <div className={styles.description}>
            <h2>Meal Of The Day</h2>
            <Link to={`/dishdetails/${randomMeal.idMeal}`} className={styles.link}>
              <h1>{randomMeal.strMeal}</h1>
            </Link>
            <p>{`${randomMeal.strCategory} | ${randomMeal.strArea}`}</p>
          </div>
          <div className={styles.img}>
            <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} className={styles.img} />
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default MealOfTheDay;

