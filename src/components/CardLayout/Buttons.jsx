import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { correct, incorrect } from "../../store/quizSlice";
import clsx from "clsx";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiOutlineRefresh,
  HiOutlineEmojiHappy,
  HiOutlineEmojiSad,
} from "react-icons/hi";
import styles from "./styles.module.scss";

export const StudyButtons = ({ data, activeIndex, categoryId }) => {
  return (
    <>
      {/* PREV */}
      <Link
        className={styles.btn}
        to={`/category/${categoryId}/${
          activeIndex === 1 ? data.length : activeIndex - 1
        }`}
      >
        <span>Prev</span>
        <span className={styles.iconWrap}>
          <HiArrowNarrowLeft className={styles.icon} />
        </span>
      </Link>
      {/* next */}
      <Link
        className={styles.btn}
        to={`/category/${categoryId}/${
          activeIndex === data.length ? 1 : activeIndex + 1
        }`}
      >
        <span>Next</span>
        <span className={styles.iconWrap}>
          <HiArrowNarrowRight className={styles.icon} />
        </span>
      </Link>
    </>
  );
};

export const QuizButtons = ({
  handleSkip,
  isFlipped,
  handleFlip,
  setIsFlipped,
  quizId,
}) => {
  const dispatch = useDispatch();

  const handleCorrect = () => {
    dispatch(correct({ id: quizId, answer: true }));
    setIsFlipped(!isFlipped);
    handleSkip();
  };
  const handleIncorrect = () => {
    dispatch(incorrect({ id: quizId, answer: false }));
    setIsFlipped(!isFlipped);
    handleSkip();
  };
  return (
    <>
      {isFlipped ? (
        <>
          <button
            className={clsx(styles.btn, styles.btnSmall)}
            onClick={handleIncorrect}
          >
            {/* Inorrect */}
            <span className={clsx(styles.iconWrap, styles.iconWrapNoOutline)}>
              <HiOutlineEmojiSad
                className={clsx(
                  styles.icon,
                  styles.iconStrokeWidth,
                  styles.iconIncorrect
                )}
              />
            </span>
          </button>
          <button className={styles.btn} onClick={handleCorrect}>
            {/* correct icon */}
            <span className={clsx(styles.iconWrap, styles.iconWrapNoOutline)}>
              <HiOutlineEmojiHappy
                className={clsx(
                  styles.icon,
                  styles.iconStrokeWidth,
                  styles.iconCorrect
                )}
              />
            </span>
          </button>
        </>
      ) : (
        <>
          <button
            className={clsx(styles.btn, styles.btnSmall)}
            onClick={handleSkip}
          >
            <span>Skip</span>
            <span className={styles.iconWrap}>
              <HiArrowNarrowRight className={styles.icon} />
            </span>
          </button>
          <button className={styles.btn} onClick={handleFlip}>
            <span>Check</span>
            <span className={styles.iconWrap}>
              <HiOutlineRefresh className={styles.icon} />
            </span>
          </button>
        </>
      )}
    </>
  );
};
