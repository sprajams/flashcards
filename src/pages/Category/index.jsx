import { Link, useParams } from "react-router-dom";
import groups from "../../assets/grouped";
import QuestionsList from "../../components/QuestionsList";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Category = () => {
  const { categoryId } = useParams();
  const data = groups[categoryId].data ?? []; // if data is undefined, set as empty array to not break
  return (
    <div>
      <h3 className={styles.title}>Category: {groups[categoryId].title}</h3>
      {/* to just begin studying all cards */}
      <div className={styles.btnContainer}>
        <h2 className={styles.studyBtn}>
          <Link
            to="1"
            className={styles.btnLink}
            aria-label="Start studying flashcards."
          >
            Study
          </Link>
        </h2>
        <h2 className={clsx(styles.studyBtn, styles.quizBtn)}>
          <Link
            to="quiz"
            className={styles.btnLink}
            aria-label="Start the quiz."
          >
            Quiz
          </Link>
        </h2>
      </div>
      {data.length > 0 ? <QuestionsList data={data} /> : null}
    </div>
  );
};

export default Category;
