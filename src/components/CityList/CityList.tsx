import Spinner from "@/components/Spinner";
import CityItem from "@/components/CityItem";

import styles from "./CityList.module.css";

import type { City } from "@/types";

type CityListProps = {
  cities: City[];
  isLoading: boolean;
};

const CityList = ({ cities, isLoading }: CityListProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} />
      ))}
    </ul>
  );
};

export default CityList;
