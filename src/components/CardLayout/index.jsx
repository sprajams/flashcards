import clsx from "clsx";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/bookmarksSlice";

const CardLayout = ({
  question,
  options,
  index,
  activeFront,
  setActiveFront,
  totalQ,
  cardId,
  testMode,
}) => {
  // get state of bookmarks
  const bookmarkState = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();
  const handleBookmark = () => {
    dispatch(add({ index: cardId }));
  };
  const handleUnbookmark = () => {
    dispatch(remove({ index: cardId }));
  };
  // return boolean on if individual card is bookmarked
  const isBookmarked = bookmarkState.indexOf(cardId) >= 0;

  return (
    <div className={styles.outer}>
      <div className={styles.topContainer}>
        <div className={styles.topInfo}>
          <h4>Question: </h4>
          <div className={styles.qInfoWrap}>
            <span className={styles.infoSmall}>
              {index + 1} / {totalQ}
            </span>
            {/* bookmark icon/button */}
            {isBookmarked ? (
              <button
                className={clsx(
                  styles.infoSmall,
                  styles.bookmarkBtn,
                  styles.iconWrap
                )}
                onClick={handleUnbookmark}
              >
                {/* bookmarked, filled icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button
                className={clsx(
                  styles.infoSmall,
                  styles.bookmarkBtn,
                  styles.iconWrap
                )}
                onClick={handleBookmark}
              >
                {/* bookmark-able, outlined icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  className="w-5 h-5 icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        {activeFront ? null : <h3 className={styles.infoBig}>{question}</h3>}
      </div>

      <div className={styles.mainWrap}>
        {activeFront ? (
          <h2>{question}</h2>
        ) : (
          <ul className={styles.answerWrap}>
            {options.length > 0
              ? options.map((elem, i) => {
                  return <li key={i}>{elem}</li>;
                })
              : null}
          </ul>
        )}
      </div>

      <div className={styles.bottomWrap}>
        <button
          className={clsx(styles.infoSmall, styles.answerBtnWrap)}
          onClick={() => setActiveFront(!activeFront)}
        >
          {activeFront ? "Show Answer" : "Show Question"}
        </button>

        {/* TODO: section for test mode */}
        {activeFront
          ? ""
          : testMode && (
              <div className={styles.actionBtnWrap}>
                <button
                  className={clsx(
                    styles.infoSmall,
                    styles.answerBtnWrap,
                    styles.iconWrap
                  )}
                >
                  {/* Inorrect */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6 icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <button
                  className={clsx(
                    styles.infoSmall,
                    styles.answerBtnWrap,
                    styles.iconWrap
                  )}
                >
                  {/* correct icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6 icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            )}
      </div>
    </div>
  );
};

export default CardLayout;
