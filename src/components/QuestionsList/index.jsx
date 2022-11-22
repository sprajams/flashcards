import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const QuestionsList = ({ data }) => {
  return (
    <ul className={styles.listWrap}>
      {data.map((x, i) => {
        return (
          <li key={i} className={styles.questionWrap}>
            <Link to={`${i + 1}`} className={styles.questionLink}>
              {x.question}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionsList;
