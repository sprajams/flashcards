import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardLayout from "../../components/CardLayout";

const ReviewMode = () => {
  const quiz = useSelector((state) => state.quiz);
  const { cardIndex } = useParams();
  let activeIndex = parseInt(cardIndex);
  return (
    <>
      <CardLayout
        title={"Quiz Review"}
        data={quiz.data[activeIndex - 1]}
        isReview={true}
        activeIndex={activeIndex}
        totalQ={quiz.data.length}
      />
    </>
  );
};

export default ReviewMode;
