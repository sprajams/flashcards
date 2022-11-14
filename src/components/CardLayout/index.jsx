import clsx from "clsx";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/bookmarksSlice";
import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { HiCheck, HiX } from "react-icons/hi";

const CardLayout = ({ data, index, totalQ, testMode, buttons, title }) => {
  const { question, options, id } = data;
  const [activeFront, setActiveFront] = useState(true);
  // get state of bookmarks
  const bookmarkState = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();
  const handleBookmark = () => {
    dispatch(add({ index: id }));
  };
  const handleUnbookmark = () => {
    dispatch(remove({ index: id }));
  };
  // return boolean on if individual card is bookmarked
  const isBookmarked = bookmarkState.indexOf(id) >= 0;
  return (
    <div className={styles.outer}>
      <h2 className={styles.titleWrap}>{title}</h2>
      <div className={styles.cardContainer}>
        <div className={styles.topContainer}>
          <div className={clsx(styles.topInfo, styles.infoSmall)}>
            <h4>Question: </h4>
            <div className={styles.qInfoWrap}>
              <span>
                {index + 1} / {totalQ}
              </span>
              {/* bookmark icon/button */}
              {isBookmarked ? (
                <button
                  className={clsx(styles.infoSmall, styles.bookmarkBtn)}
                  onClick={handleUnbookmark}
                >
                  {/* bookmarked, filled icon */}
                  <BsBookmarkFill className={styles.iconWrap} />
                </button>
              ) : (
                <button
                  className={clsx(styles.infoSmall, styles.bookmarkBtn)}
                  onClick={handleBookmark}
                >
                  {/* bookmark-able, outlined icon */}
                  <BsBookmark className={styles.iconWrap} />
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
                    className={clsx(styles.infoSmall, styles.answerBtnWrap)}
                  >
                    {/* Inorrect */}
                    <HiX className={styles.iconWrap} />
                  </button>
                  <button
                    className={clsx(styles.infoSmall, styles.answerBtnWrap)}
                  >
                    {/* correct icon */}
                    <HiCheck className={styles.iconWrap} />
                  </button>
                </div>
              )}
        </div>
      </div>
      <div className={styles.btnContainer}>{buttons}</div>
    </div>
  );
};

export default CardLayout;
