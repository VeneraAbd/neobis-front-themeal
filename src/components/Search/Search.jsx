import { useState, useEffect } from 'react';
import axios from 'axios';
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

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <section className={styles.container}>
      <h2>Find your Meal</h2>
      <div className={styles.input_container}>
        <input
          type="text"
          placeholder="Find your meal"
          className={styles.input}
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button className={styles.button} onClick={handleSearch}>
          Search
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className={styles.results}>
          <ul className={styles.ul}>
            {searchResults.map((meal) => (
              <li key={meal.idMeal}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                {meal.strMeal}
                </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Search;