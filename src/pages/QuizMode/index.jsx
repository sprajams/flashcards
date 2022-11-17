import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../../store/quizSlice";
import data from "../../assets/output.json";
import CardLayout from "../../components/CardLayout";
import Results from "../Results";

const QuizMode = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  // create array of 10 random non-repeating indexes to use for quiz ?s
  const handleSkip = () => {
    if (activeIndex < 10) {
      setActiveIndex(() => {
        return activeIndex + 1;
      });
    }
  };

  useEffect(() => {
    let result = [];
    while (result.length < 10) {
      let randomNum = Math.floor(Math.random() * 100);
      if (!result.includes(randomNum)) {
        result.push(randomNum);
      }
    }
    result.sort((a, b) => a - b);
    dispatch(start({ indexes: result }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          quizId={quiz.ids[activeIndex]}
        />
      ) : activeIndex === 10 ? (
        <Results />
      ) : null}
    </>
  );
};

export default QuizMode;
