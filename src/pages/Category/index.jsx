import { Link, useParams } from "react-router-dom";
import groups from "../../assets/grouped";
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
          <Link to="1" className={styles.btnLink}>
            Study
          </Link>
        </h2>
        <h2 className={clsx(styles.studyBtn, styles.quizBtn)}>
          <Link to="quiz" className={styles.btnLink}>
            Quiz
          </Link>
        </h2>
      </div>
      {data.length > 0 ? (
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
      ) : null}
    </div>
  );
};

export default Category;
