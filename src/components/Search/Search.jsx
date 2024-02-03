import styles from "./Search.module.css";

const Search = () => {
  return (
    <section className={styles.container}>
        <h2>Find your Meal</h2>
        <div className={styles.input_container}>
            <input type="text" placeholder="Find your meal" className={styles.input}/>
            <button className={styles.button}>Search</button>
        </div>
    </section>
  )
}

export default Search