import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/bookmarksSlice";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import clsx from "clsx";
import styles from "./styles.module.scss";

const BookmarkButtons = ({ data, id }) => {
  // get state of bookmarks
  const bookmarkState = useSelector((state) => state.bookmarks.data);
  const dispatch = useDispatch();
  const handleBookmark = () => {
    dispatch(add({ data: data }));
  };
  const handleUnbookmark = () => {
    dispatch(remove({ index: id }));
  };
  return (
    <>
      <button
        type="button"
        className={clsx(styles.infoSmall, styles.bookmarkBtn)}
        onClick={handleUnbookmark}
        aria-label="Unbookmark this question."
      >
        {/* bookmarked, filled icon */}
        <BsBookmarkFill className={styles.icon} />
      </button>

      <button
        type="button"
        className={clsx(styles.infoSmall, styles.bookmarkBtn)}
        onClick={handleBookmark}
        aria-label="Bookmark this question."
      >
        {/* bookmark-able, outlined icon */}
        <BsBookmark className={styles.icon} />
      </button>
    </>
  );
};

export default BookmarkButtons;
