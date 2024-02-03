import { Link } from 'react-router-dom';
import styles from './MealOfTheDay.module.css';

const MealOfTheDay = () => {
  return (
    <section className={styles.container}>
        <div className={styles.description}>
            <h2>Meal Of The Day</h2>
            <Link to="/dishdetails" className={styles.link}>
            <h1>Apple & Blackberry Crumble</h1>
            </Link>
            <p>Dessert | British</p>
        </div>
        <div className={styles.img}>
            <img src="https://www.freshnlean.com/wp-content/uploads/2021/03/Meal-Plan-plate-protein.png" alt="meal of the day image" className={styles.img}/>
        </div>
        
    </section>
  )
}

export default MealOfTheDay;