import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../../store/quizSlice";
import data from "../../assets/output.json";
import CardLayout from "../../components/CardLayout";

const QuizMode = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  // create array of 10 random non-repeating indexes to use for quiz ?s
  const handleQuizIndex = () => {
    let result = [];
    while (result.length < 10) {
      let randomNum = Math.floor(Math.random() * 100);
      if (!result.includes(randomNum)) {
        result.push(randomNum);
      }
    }
    result.sort((a, b) => a - b);
    dispatch(start({ indexes: result }));
  };

  const handleSkip = () => {
    if (activeIndex < 10) {
      setActiveIndex(() => {
        return activeIndex + 1;
      });
    }
  };

  return (
    <>
      {quiz.ids.length > 0 && activeIndex !== 10 ? (
        <CardLayout
          data={data.questions.find(({ id }) => quiz.ids[activeIndex] === id)}
          index={activeIndex}
          totalQ={quiz.ids.length}
          title={"Quiz"}
          handleSkip={handleSkip}
          isQuiz={true}
        />
      ) : activeIndex === 10 ? (
        <h2>show score</h2>
      ) : (
        <>
          <p>Answer 6 correctly out of 10 to win!</p>
          <button onClick={handleQuizIndex}>Start</button>
        </>
      )}
    </>
  );
};

export default QuizMode;