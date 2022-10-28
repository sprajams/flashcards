import BackLink from "../BackLink";
import { useSelector } from "react-redux";

const Bookmark = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  console.log(bookmarks);
  return (
    <div>
      <BackLink />
      <h1>BOOKMARK</h1>
    </div>
  );
};

export default Bookmark;
