import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ResultCircle from "../../components/ResultCircle";
import styles from "./styles.module.scss";
import { HiOutlineEmojiHappy, HiOutlineEmojiSad } from "react-icons/hi";
import { useEffect, useCallback } from "react";
import QuestionsList from "../../components/QuestionsList";
import { motion } from "framer-motion";

const Results = () => {
  const quiz = useSelector((state) => state.quiz);
  // turn stats object into [[key,value], [id, true]]
  const statsEntries = Object.entries(quiz.stats);
  //   sort ids into correct vs incorrect arrays
  //   { correct: [id,...], incorrect: [id,...]}
  const results = statsEntries.reduce(
    (acc, curr) => {
      const [id, isCorrect] = curr;
      if (isCorrect) {
        acc.correct.push(id);
      } else {
        acc.incorrect.push(id);
      }
      return acc;
    },
    { correct: [], incorrect: [] }
  );

  const numCorrect = results.correct.length;
  const isPassing = numCorrect >= 6;
  const percentCorrect = (numCorrect / 10).toFixed(2) * 100;

  const navigate = useNavigate();
  const handleRetry = useCallback(() => {
    navigate("/quiz"); // refresh page to start new quiz
  }, [navigate]);

  // use to detech if dark mode is system preference
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // navigate back to start of quiz if quiz stats are not complete
  useEffect(() => {
    if (quiz.stats) {
      const quizStatsLength = Object.keys(quiz.stats).length;
      if (quizStatsLength !== 10) {
        navigate("/quiz", { replace: true });
      }
    }
  }, [quiz.stats, navigate]);

  return (
    <div className={styles.resultContainer}>
      {/* <h3 className={styles.title}>{title}</h3> */}
      <h2>Final Score:</h2>
      <div className={styles.resultsWrap}>
        <div className={styles.resultsInfo}>
          <h3 className={styles.resultText}>
            {isPassing ? "PASS" : "No Pass"}
          </h3>
          <div className={styles.iconWrap}>
            {isPassing ? (
              <HiOutlineEmojiHappy className={styles.icon} />
            ) : (
              <HiOutlineEmojiSad className={styles.icon} />
            )}
          </div>
        </div>
        <ResultCircle
          percentage={percentCorrect}
          colorPrimary={isPassing ? "#29824e" : "#be5050"}
          colorSecondary={
            darkThemeMq ? "rgba(255, 255, 255, 0.55)" : "rgba(0, 0, 0, 0.2)"
          }
          textColor={darkThemeMq ? "white" : "black"}
        />
      </div>
      <motion.button
        onClick={handleRetry}
        className={styles.retryBtn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        aria-label="Retry quiz."
      >
        retry
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className={styles.questionsWrap}
      >
        <h4>Questions:</h4>
        <QuestionsList data={quiz.data} results={results} />
      </motion.div>
    </div>
  );
};

export default Results;
