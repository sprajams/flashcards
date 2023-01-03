import { useSelector } from "react-redux";
import QuestionsList from "../../components/QuestionsList";

const Bookmark = () => {
  const bookmarks = useSelector((state) => state.bookmarks);

  return (
    <div>
      <h1>BOOKMARK</h1>
      {bookmarks.data.length > 0 ? (
        <QuestionsList data={bookmarks.data} />
      ) : null}
    </div>
  );
};

export default Bookmark;
