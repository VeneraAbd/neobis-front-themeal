import MealOfTheDay from "../../components/MealOfTheDay/MealOfTheDay"
import Search from "../../components/Search/Search"
import styles from './Meal.module.css';
const Meal = () => {
  return (
    <div className={styles.container}>
      <MealOfTheDay/>
      <Search/>
    </div>
  )
}

export default Meal