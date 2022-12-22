import { Link } from "react-router-dom";
import { HiCheck, HiX } from "react-icons/hi";
import styles from "./styles.module.scss";
import clsx from "clsx";

const QuestionsList = ({ data, results }) => {
  return (
    <ul className={styles.listWrap}>
      {data.map((x, i) => {
        const correct = results
          ? results.correct.includes(x.id.toString())
          : null;
        return (
          <li key={i} className={styles.questionWrap}>
            <Link
              to={`${i + 1}`}
              className={styles.questionLink}
              aria-label="question details"
            >
              <span>{x.question}</span>
              {results ? (
                correct ? (
                  <span className={styles.iconWrap}>
                    <HiCheck
                      className={clsx(styles.icon, styles.correctIcon)}
                    />
                  </span>
                ) : (
                  <span className={styles.iconWrap}>
                    <HiX className={clsx(styles.icon, styles.incorrectIcon)} />
                  </span>
                )
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionsList;
