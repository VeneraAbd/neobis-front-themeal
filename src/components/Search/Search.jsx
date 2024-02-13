import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Search.module.css';

const Search = () => {
  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`);
      setSearchResults(response.data.meals || []); 
    } catch (error) {
      console.log('Error fetching data:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleSearch(); 
  };

  return (
    <section className={styles.container}>
      <h2>Find your Meal</h2>
      <form onSubmit={handleSubmit}> 
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder="Find your meal"
            className={styles.input}
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <button type="submit" className={styles.button}> 
            Search
          </button>
        </div>
      </form>

      {searchResults.length > 0 && (
        <div className={styles.results}>
          <ul className={styles.ul}>
            {searchResults.map((meal) => (
              <li key={meal.idMeal}>
                <Link to={`/dishdetails/${meal.idMeal}`} className={styles.link}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </Link>
                <div className={styles.info}>
                  <h3>{meal.strMeal}</h3>
                  <p>{`${meal.strCategory} | ${meal.strArea}`}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Search;
