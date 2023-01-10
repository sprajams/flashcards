import { useSelector } from "react-redux";
import QuestionsList from "../../components/QuestionsList";

const Bookmark = () => {
  const bookmarks = useSelector((state) => state.bookmarks);

  return (
    <div>
      <h1>BOOKMARK</h1>
      {bookmarks.id.length > 0 ? <QuestionsList data={bookmarks.id} /> : null}
    </div>
  );
};

export default Bookmark;
