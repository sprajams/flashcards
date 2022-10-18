import clsx from "clsx";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { add, remove } from "../../store/bookmarksSlice";

const CardLayout = ({
  question,
  options,
  index,
  activeFront,
  setActiveFront,
}) => {
  const dispatch = useDispatch();

  const handleBookmark = () => {
    dispatch(add({ index: index }));
  };
  const handleUnbookmark = () => {
    dispatch(remove({ index: index }));
  };

  return (
    <div className={styles.outer}>
      <div className={styles.topWrap}>
        {activeFront ? (
          <>
            <h4>Question:</h4>
            <span className={styles.infoSmall}>{index + 1} / 100</span>
          </>
        ) : (
          <h4>{question}</h4>
        )}
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
        {activeFront ? (
          ""
        ) : (
          <>
            <button
              className={clsx(styles.infoSmall, styles.answerBtnWrap)}
              onClick={handleBookmark}
            >
              bookmark
            </button>
            <button
              className={clsx(styles.infoSmall, styles.answerBtnWrap)}
              onClick={handleUnbookmark}
            >
              unbookmark
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CardLayout;
