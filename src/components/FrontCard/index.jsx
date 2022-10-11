import clsx from "clsx";
import styles from "./styles.module.scss";
import CardLayout from "../CardLayout";
const FrontCard = ({ data, index }) => {
  return (
    <CardLayout>
      <div className={styles.topInfo}>
        <h4>Question:</h4>
        <span className={styles.infoSmall}>{index + 1} / 100</span>
      </div>
      <div className={styles.questionWrapper}>
        <h2>{data}</h2>
      </div>
      <div className={clsx(styles.infoSmall, styles.answerBtnWrap)}>
        Show Answer
      </div>
    </CardLayout>
  );
};
export default FrontCard;
