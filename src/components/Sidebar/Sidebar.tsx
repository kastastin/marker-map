import { Outlet } from "react-router-dom";

import Logo from "@/components/Logo";
import AppNav from "@/components/AppNav";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by MarkerMap Inc.</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
