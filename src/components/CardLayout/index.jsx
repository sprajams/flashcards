import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useHref } from "react-router-dom";
import { StudyButtons, QuizButtons } from "./Buttons";
import { add, remove } from "../../store/bookmarksSlice";
import { useState, useEffect } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useSpeech } from "../../contexts/SpeechContext";
import { SpeechButtons } from "../SpeechButtons";

const CardLayout = ({
  data,
  totalQ,
  activeIndex,
  title,
  isQuiz,
  isReview,
  categoryId,
  handleSkip,
  handleNext,
}) => {
  const { cancel } = useSpeech();

  const { question, options, id } = data || {};
  const href = useHref();
  const navigate = useNavigate();

  // re-direct user to home if data object is empty to avoid cardlayout not displaying
  useEffect(() => {
    if (!data) {
      navigate("/", { replace: true });
    }
  }, [data, href, navigate]);

  const [isFlipped, setIsFlipped] = useState(false);
  // get state of bookmarks
  const bookmarkState = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();
  const handleBookmark = () => {
    dispatch(add({ index: id }));
  };
  const handleUnbookmark = () => {
    dispatch(remove({ index: id }));
  };
  // return boolean on if individual card is bookmarked
  const isBookmarked = bookmarkState.indexOf(id) >= 0;

  // check if in review mode, show back of card with answers
  useEffect(() => {
    if (isReview) {
      setIsFlipped(true);
    }
  }, [isReview]);

  // state of a click to flip card
  const [clicked, setClicked] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setClicked(true);
    cancel();
  };

  // state of card clicked to default to false after 0.5s
  useEffect(() => {
    let timeout;
    if (clicked) {
      timeout = setTimeout(() => setClicked(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [clicked]);

  const variants = {
    flip: {
      rotateY: 180,
      transition: {
        duration: 0.6,
      },
    },
    text: {
      opacity: 1,
      scale: 1,
    },
  };

  const textToSpeech = isFlipped ? options : question;

  return (
    <div className={styles.outer}>
      <h2 className={styles.title}>{title}</h2>
      {/* card */}
      <motion.div
        className={styles.cardWrap}
        key={id}
        initial={{ x: -80, rotate: -6 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{
          duration: 0.5,
          when: "beforeChildren",
        }}
      >
        <motion.div
          className={styles.cardContainer}
          key={clicked}
          variants={variants}
          animate={clicked ? "flip" : ""}
        ></motion.div>
        <motion.div
          className={styles.cardContent}
          initial={{ opacity: 0, scale: 0.95 }}
          variants={variants}
          animate={"text"}
          key={isFlipped + href}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className={styles.topContainer}>
            <div className={clsx(styles.topInfo, styles.infoSmall)}>
              <h4>Question: </h4>
              <div className={styles.qInfoWrap}>
                <span>
                  {activeIndex} / {totalQ}
                </span>
                {/* bookmark icon/button */}
                {isBookmarked ? (
                  <button
                    className={clsx(styles.infoSmall, styles.bookmarkBtn)}
                    onClick={handleUnbookmark}
                  >
                    {/* bookmarked, filled icon */}
                    <BsBookmarkFill className={styles.icon} />
                  </button>
                ) : (
                  <button
                    className={clsx(styles.infoSmall, styles.bookmarkBtn)}
                    onClick={handleBookmark}
                  >
                    {/* bookmark-able, outlined icon */}
                    <BsBookmark className={styles.icon} />
                  </button>
                )}
              </div>
            </div>
            {isFlipped ? <h3 className={styles.infoBig}>{question}</h3> : null}
          </div>

          <div className={styles.mainWrap}>
            <>
              {isFlipped ? (
                <ul className={styles.answerWrap}>
                  {options.length > 0
                    ? options.map((elem, i) => {
                        return <li key={i}>{elem}</li>;
                      })
                    : null}
                </ul>
              ) : (
                <h2>{question}</h2>
              )}
            </>
          </div>

          <div className={clsx(styles.bottomWrap, styles.infoSmall)}>
            {/* text-to-speech & mute buttons */}
            <SpeechButtons text={textToSpeech} />
          </div>
        </motion.div>
      </motion.div>
      {/* interactive buttons */}
      <div className={styles.btnContainer}>
        {/* show correct & incorrect buttons (buttonsFlipped) only if available in quiz mode */}
        {/* {isFlipped ? buttonsFlipped ?? buttons : "buttons"} */}
        {isQuiz ? (
          <QuizButtons
            handleNext={handleNext}
            handleSkip={handleSkip}
            isFlipped={isFlipped}
            handleFlip={handleFlip}
            setIsFlipped={setIsFlipped}
            quizId={id}
          />
        ) : (
          <StudyButtons
            data={data}
            totalQ={totalQ}
            handleFlip={handleFlip}
            activeIndex={activeIndex}
            categoryId={categoryId}
          />
        )}
      </div>
    </div>
  );
};

export default CardLayout;
