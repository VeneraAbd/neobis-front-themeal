import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
            <Link to="/" className={styles.link}>
                The Meal
            </Link>
            {/* <Link to="/dishdetails">
            Meal details
            </Link>
            <Link to="*">
            NotFound
            </Link> */}
    </div>
  )
}

export default Header