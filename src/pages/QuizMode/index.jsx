import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../../store/quizSlice";
import data from "../../assets/output.json";
import groups from "../../assets/grouped";
import CardLayout from "../../components/CardLayout";
import Results from "../Results";

const QuizMode = () => {
  const { categoryId } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);

  const handleSkip = () => {
    if (activeIndex < 10) {
      setActiveIndex(() => {
        return activeIndex + 1;
      });
    }
  };

  // create array of 10 random non-repeating indexes to use for quiz ?s
  useEffect(() => {
    let result = [];
    while (result.length < 10) {
      let randomNum = Math.floor(Math.random() * 100);
      if (groups[categoryId]) {
        randomNum = Math.floor(
          Math.random() *
            (groups[categoryId].maxNum - groups[categoryId].minNum + 1) +
            groups[categoryId].minNum
        );
      }
      // weed out duplicates
      if (!result.includes(randomNum)) {
        result.push(randomNum);
      }
    }
    dispatch(start({ indexes: result }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const quizTitle = groups[categoryId]
    ? "Quiz: " + groups[categoryId].title
    : "Quiz";

  return (
    <>
      {quiz.ids.length > 0 && activeIndex !== 10 ? (
        <CardLayout
          data={data.questions.find(({ id }) => quiz.ids[activeIndex] === id)}
          index={activeIndex}
          totalQ={quiz.ids.length}
          title={quizTitle}
          handleSkip={handleSkip}
          isQuiz={true}
          quizId={quiz.ids[activeIndex]}
        />
      ) : activeIndex === 10 ? (
        <Results title={quizTitle} />
      ) : null}
    </>
  );
};

export default QuizMode;
