import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardLayout from "../../components/CardLayout";

const BookmarkMode = () => {
  const bookmarkData = useSelector((state) => state.bookmarks.data);
  const { cardIndex } = useParams();
  let activeIndex = parseInt(cardIndex);

  return (
    <>
      <CardLayout
        title={"Bookmarked"}
        data={bookmarkData[activeIndex - 1]}
        activeIndex={activeIndex}
        totalQ={bookmarkData.length}
      />
    </>
  );
};

export default BookmarkMode;
