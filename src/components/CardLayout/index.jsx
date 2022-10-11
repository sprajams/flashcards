import clsx from "clsx";
import styles from "./styles.module.scss";

const CardLayout = ({
  question,
  options,
  index,
  activeFront,
  setActiveFront,
}) => {
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
        <div
          className={clsx(styles.infoSmall, styles.answerBtnWrap)}
          onClick={() => setActiveFront(!activeFront)}
        >
          {activeFront ? "Show Answer" : "Show Question"}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
