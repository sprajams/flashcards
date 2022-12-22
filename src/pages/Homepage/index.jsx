import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Homepage = () => {
  return (
    <>
      <h1 className={styles.title}>Civics Test: 2008 Version</h1>
      <ul className={styles.linkContainer}>
        {/* questions 1-57 */}
        <li className={styles.linkWrap}>
          <Link
            to="/category/1"
            aria-label="Category 1: AMERICAN GOVERNMENT"
            className={styles.link}
          >
            Category 1: AMERICAN GOVERNMENT
          </Link>
        </li>
        {/* questions 58-87 */}
        <li className={styles.linkWrap}>
          <Link
            to="/category/2"
            aria-label="Category 2: AMERICAN HISTORY"
            className={styles.link}
          >
            Category 2: AMERICAN HISTORY
          </Link>
        </li>
        {/* questions: 88-100 */}
        <li className={styles.linkWrap}>
          <Link
            to="/category/3"
            aria-label="Category 3: OTHER"
            className={styles.link}
          >
            Category 3: OTHER
          </Link>
        </li>
        <li className={styles.linkWrap}>
          <Link
            to="/category/all"
            aria-label="All category"
            className={styles.link}
          >
            All
          </Link>
        </li>
        <li className={styles.linkWrap}>
          <Link to="/quiz" aria-label="Practice test" className={styles.link}>
            Practice Test
          </Link>
        </li>

        {/* TODO: randomize 10 questions */}
        {/*  <li>
        <Link to="/bookmark">Bookmark</Link>
      </li> */}
      </ul>
    </>
  );
};

export default Homepage;
