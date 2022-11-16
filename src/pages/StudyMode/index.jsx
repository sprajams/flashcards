import { useParams } from "react-router-dom";
import CardLayout from "../../components/CardLayout";
import groups from "../../assets/grouped";
import output from "../../assets/output.json";

const StudyMode = () => {
  const { categoryId, cardIndex } = useParams();
  const data =
    categoryId && cardIndex ? groups[categoryId].data : output.questions; //
  const activeIndex = parseInt(cardIndex, 10);
  const adjustedIndex = activeIndex - 1;

  return (
    <CardLayout
      title={`Category: ${groups[categoryId].title}`}
      data={data[adjustedIndex]}
      index={adjustedIndex}
      activeIndex={activeIndex}
      totalQ={data.length}
      categoryId={categoryId}
    />
  );
};

export default StudyMode;
