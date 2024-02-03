import styles from "./MealDetails.module.css";

const MealDetails = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.description}>
              <h1>Apple & Blackberry Crumble</h1>
              <p>Dessert | British</p>
          </div>
          <div className={styles.img}>
              <img src="https://www.freshnlean.com/wp-content/uploads/2021/03/Meal-Plan-plate-protein.png" alt="meal of the day image" className={styles.img}/>
          </div>
      </div>
      <div className={styles.recipe}>
          <ul className={styles.ul}>
            <li>Plain Flour 120g</li>
            <li>Plain Flour 120g</li>
            <li>Plain Flour 120g</li>
            <li>Plain Flour 120g</li>
            <li>Plain Flour 120g</li>
          </ul>
          <div className={styles.instructions}>
            <h2>Instruction</h2>
            <p className={styles.instruction_text}>
            Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured. Meanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan. To serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.
            </p>
            <div className={styles.a}>
            <a href="" target="_blank">Watch on YouTube</a>
            </div>
            
          </div>
          
      </div>
    </div>
    
  )
}

export default MealDetails