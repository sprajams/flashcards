import styles from "./styles.module.scss";

const CardLayout = ({ children }) => {
  return <div className={styles.outer}>{children}</div>;
};

export default CardLayout;
