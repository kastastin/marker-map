import { Link } from "react-router-dom";

import { formatDate } from "./utils";

import styles from "./CityItem.module.css";

import type { City } from "@/types";

type CityItemProps = {
  city: City;
};

const CityItem = ({ city }: CityItemProps) => {
  const { id, cityName, emoji, date, position } = city;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
  };

  return (
    <li>
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button onClick={handleClick} className={styles.deleteBtn}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
