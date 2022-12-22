import { Link, useHref } from "react-router-dom";
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
import { useSpeech } from "../../contexts/SpeechContext";
import styles from "./styles.module.scss";

export const StudyButtons = ({ activeIndex, handleFlip, totalQ }) => {
  const href = useHref();
  let tempArr = href.split("/").slice(0, -1).join("/");
  const { cancel } = useSpeech();
  return (
    <>
      {/* PREV */}
      <Link
        to={`${tempArr}/${activeIndex === 1 ? totalQ : activeIndex - 1}`}
        className={styles.btn}
        onClick={() => cancel()}
        aria-label="Go to previous question."
      >
        <span>Prev</span>
        <span className={styles.iconWrap}>
          <HiArrowNarrowLeft className={styles.icon} />
        </span>
      </Link>

      {/* check */}
      <button
        type="button"
        className={styles.btn}
        onClick={handleFlip}
        aria-label="Flip the card over to see the other side."
      >
        <span>Check</span>
        <span className={styles.iconWrap}>
          <HiOutlineRefresh className={styles.icon} />
        </span>
      </button>

      {/* next */}
      <Link
        className={styles.btn}
        to={`${tempArr}/${activeIndex === totalQ ? 1 : activeIndex + 1}`}
        onClick={() => cancel()}
        aria-label="Go to next question."
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
  handleNext,
  isFlipped,
  handleFlip,
  setIsFlipped,
  quizId,
}) => {
  const dispatch = useDispatch();
  const { cancel } = useSpeech();

  const handleCorrect = () => {
    dispatch(correct({ id: quizId, answer: true }));
    setIsFlipped(!isFlipped);
    handleNext();
    cancel();
  };
  const handleIncorrect = () => {
    dispatch(incorrect({ id: quizId, answer: false }));
    setIsFlipped(!isFlipped);
    handleNext();
    cancel();
  };
  return (
    <>
      {isFlipped ? (
        <>
          <button
            type="button"
            className={styles.btn}
            onClick={handleIncorrect}
            aria-label="Mark this question as incorrect."
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
          <button
            type="button"
            className={styles.btn}
            onClick={handleCorrect}
            aria-label="Mark this question as correct."
          >
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
            type="button"
            className={styles.btn}
            onClick={handleSkip}
            aria-label="Skip answering this question."
          >
            <span>Skip</span>
            <span className={styles.iconWrap}>
              <HiArrowNarrowRight className={styles.icon} />
            </span>
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={handleFlip}
            aria-label="Flip the card over to see the other side."
          >
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
