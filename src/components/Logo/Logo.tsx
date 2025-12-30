import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/full-logo.png" alt="MarkerMap logo" className={styles.logo} />
    </Link>
  );
};

export default Logo;
