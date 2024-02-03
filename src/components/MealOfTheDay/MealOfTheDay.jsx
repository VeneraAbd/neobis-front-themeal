import { Link } from 'react-router-dom';
import styles from './MealOfTheDay.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MealOfTheDay = () => {
  const [ randomMeal, setRandomMeal ] = useState([])
    console.log(randomMeal, "mmm")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        // console.log('Meal data:', response.data);
        setRandomMeal(response.data)
      } catch (error) {
        console.log('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  
 
  return (
    <>
    {Array.isArray(randomMeal.meals) ? (
      randomMeal.meals.map((meal, index) => (
        <section key={index} className={styles.container}>
          <div className={styles.description}>
            <h2>Meal Of The Day</h2>
            <Link to="/dishdetails" className={styles.link}>
              <h1>{meal.strMeal}</h1>
            </Link>
            <p>{`${meal.strCategory} | ${meal.strArea}`}</p>
          </div>
          <div className={styles.img}>
            <img src={meal.strMealThumb} alt={`meal of the day ${index + 1}`} className={styles.img} />
          </div>
        </section>
      ))
    ) : (
      <p>No meals available</p>
    )}
  </>
  )
}

export default MealOfTheDay;