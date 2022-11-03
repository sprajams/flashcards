import { Link, useParams } from "react-router-dom";
import groups from "../../assets/grouped";
import styles from "./styles.module.scss";

const Category = () => {
  const { categoryId } = useParams();
  const data = groups[categoryId].data ?? []; // if data is undefined, set as empty array to not break
  return (
    <div>
      <h2 className={styles.title}>Category: {groups[categoryId].title}</h2>
      {/* to just begin studying all cards */}
      <div>
        <h3 className={styles.startBtn}>
          <Link to="1" className={styles.btnLink}>
            Start
          </Link>
        </h3>
      </div>
      {data.length > 0 ? (
        <ul className={styles.listWrap}>
          {data.map((x, i) => {
            return (
              <li key={i} className={styles.questionWrap}>
                <Link to={`${i + 1}`}>{x.question}</Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Category;
