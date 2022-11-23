import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../../store/quizSlice";
import data from "../../assets/output.json";
import groups from "../../assets/grouped";
import CardLayout from "../../components/CardLayout";

const QuizMode = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [quizArray, setQuizArray] = useState([]);

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
  }, [dispatch, categoryId]);

  const quizTitle = groups[categoryId]
    ? "Quiz: " + groups[categoryId].title
    : "Quiz";

  useEffect(() => {
    if (quiz.ids.length === 10) {
      let resultA = quiz.ids.map((idx) => {
        return data.questions.find(({ id }) => idx === id);
      });
      setQuizArray(resultA);
    }
  }, [quiz.ids]);

  useEffect(() => {
    if (activeIndex === 10) {
      navigate("/result");
    }
  }, [activeIndex, navigate]);

  return (
    <>
      {quizArray.length > 0 && activeIndex !== 10 ? (
        <CardLayout
          data={quizArray[activeIndex]}
          activeIndex={activeIndex + 1}
          totalQ={quiz.ids.length}
          title={quizTitle}
          handleSkip={handleSkip}
          isQuiz={true}
        />
      ) : null}
    </>
  );
};

export default QuizMode;
