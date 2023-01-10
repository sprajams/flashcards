import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardLayout from "../../components/CardLayout";
import data from "../../assets/output.json";

const BookmarkMode = () => {
  const bookmarkData = useSelector((state) => state.bookmarks.id);
  const { cardIndex } = useParams();
  let activeIndex = parseInt(cardIndex);
  // use the index on the current URL in order to find retrieve data from bookmark id
  const targetData = data.questions.find(
    (x) => x.id === bookmarkData[activeIndex - 1]
  );
  return (
    <>
      <CardLayout
        title={"Bookmarked"}
        data={targetData}
        activeIndex={activeIndex}
        totalQ={bookmarkData.length}
      />
    </>
  );
};

export default BookmarkMode;
