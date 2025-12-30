import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <button className={`${styles.btn} ${styles.primary}`}>{children}</button>;
};

export default Button;
