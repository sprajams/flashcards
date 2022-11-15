import { Link, useParams } from "react-router-dom";
import CardLayout from "../../components/CardLayout";
import groups from "../../assets/grouped";
import output from "../../assets/output.json";
import styles from "./styles.module.scss";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const StudyMode = () => {
  const { categoryId, cardIndex } = useParams();
  const data =
    categoryId && cardIndex ? groups[categoryId].data : output.questions; //
  const activeIndex = parseInt(cardIndex, 10);
  const adjustedIndex = activeIndex - 1;

  const buttons = (
    <>
      {/* PREV */}
      <div className={styles.btnWrap}>
        <span>Prev</span>
        <Link
          className={styles.btn}
          to={`/category/${categoryId}/${
            activeIndex === 1 ? data.length : activeIndex - 1
          }`}
        >
          <span className={styles.iconWrap}>
            <HiArrowNarrowLeft />
          </span>
        </Link>
      </div>
      {/* next */}
      <div className={styles.btnWrap}>
        <span>Next</span>
        <Link
          className={styles.btn}
          to={`/category/${categoryId}/${
            activeIndex === data.length ? 1 : activeIndex + 1
          }`}
        >
          <span className={styles.iconWrap}>
            <HiArrowNarrowRight />
          </span>
        </Link>
      </div>
    </>
  );

  return (
    <div className={styles.cardWrap}>
      <div className={styles.contentContainer}>
        <CardLayout
          title={`Category: ${groups[categoryId].title}`}
          data={data[adjustedIndex]}
          index={adjustedIndex}
          totalQ={data.length}
          buttons={buttons}
        />
      </div>
    </div>
  );
};

export default StudyMode;
