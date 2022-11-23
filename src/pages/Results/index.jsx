import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ResultCircle from "../../components/ResultCircle";
import styles from "./styles.module.scss";
import { HiOutlineEmojiHappy, HiOutlineEmojiSad } from "react-icons/hi";
// import QuestionsList from "../../components/QuestionsList";

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
  const handleRetry = () => {
    navigate("/quiz"); // refresh page to start new quiz
  };

  // use to detech if dark mode is system preference
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)").matches;

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
          colorSecondary={"#cdd2cf"}
          textColor={darkThemeMq ? "white" : "black"}
        />
      </div>
      <button onClick={handleRetry} className={styles.retryBtn}>
        retry
      </button>
      {/* <div className={styles.questionsWrap}>
        <h4>Questions:</h4>
        <QuestionsList data={quizData} results={results} />
      </div> */}
    </div>
  );
};

export default Results;
