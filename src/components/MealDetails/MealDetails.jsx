import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./MealDetails.module.css";

const MealDetails = () => {
  const { mealId } = useParams();
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        setMealDetails(response.data.meals[0]);
      } catch (error) {
        console.log('Error fetching meal details:', error.message);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  return (
    <div className={styles.wrapper}>
      {mealDetails ? (
        <>
          <div className={styles.container}>
            <div className={styles.description}>
              <h1>{mealDetails.strMeal}</h1>
              <p>{`${mealDetails.strCategory} | ${mealDetails.strArea}`}</p>
            </div>
            <div className={styles.img}>
              <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} className={styles.img}/>
            </div>
          </div>
          <div className={styles.recipe}>
            <ul className={styles.ul}>
              {mealDetails && Object.entries(mealDetails)
                .filter(([key, value]) => key.includes('strIngredient') && value)
                .map(([key, value]) => (
                  <li key={key}>
                    <span className={styles.ingredient}>{value}</span> - 
                    <span className={styles.measure}> {mealDetails[`strMeasure${key.split('strIngredient')[1]}`]}</span>
                  </li>
                ))}
            </ul>
            <div className={styles.instructions}>
              <h2>Instructions</h2>
              <p className={styles.instruction_text}>
                {mealDetails.strInstructions}
              </p>
              <div className={styles.a}>
                <a href={mealDetails.strYoutube} target="_blank" rel="noreferrer">Watch on YouTube</a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MealDetails;

