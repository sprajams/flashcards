import { Link, useHref } from "react-router-dom";
import { useDispatch } from "react-redux";
import { correct, incorrect } from "../../store/quizSlice";
import { motion } from "framer-motion";
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

export const StudyButtons = ({ activeIndex, categoryId, totalQ }) => {
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
      >
        <span whileHover={{ scale: 0.95 }}>Prev</span>
        <span whileHover={{ scale: 1.05 }} className={styles.iconWrap}>
          <HiArrowNarrowLeft className={styles.icon} />
        </span>
      </Link>
      {/* next */}
      <Link
        className={styles.btn}
        to={`${tempArr}/${activeIndex === totalQ ? 1 : activeIndex + 1}`}
        onClick={() => cancel()}
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
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={styles.btn}
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
          </motion.button>
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
          <button className={styles.btn} onClick={handleSkip}>
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
