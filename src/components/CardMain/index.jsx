import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardLayout from "../CardLayout";
import groups from "../../assets/grouped";
import output from "../../assets/output.json";
import styles from "./styles.module.scss";

const CardMain = () => {
  const { categoryId, cardIndex } = useParams();
  const data =
    categoryId && cardIndex ? groups[categoryId].data : output.questions; //
  const activeIndex = parseInt(cardIndex, 10);
  const adjustedIndex = activeIndex - 1;

  const [activeFront, setActiveFront] = useState(true);

  // TODO: is there a better to make sure front of card is displayed when going to next card
  useEffect(() => {
    setActiveFront(true);
  }, [cardIndex, categoryId]);

  return (
    <div className={styles.cardWrap}>
      <div className={styles.contentContainer}>
        <CardLayout
          question={data[adjustedIndex].question}
          options={data[adjustedIndex].options}
          cardId={data[adjustedIndex].id}
          index={adjustedIndex}
          totalQ={data.length}
          activeFront={activeFront}
          testMode={false}
          setActiveFront={setActiveFront}
        />
      </div>
      {categoryId ? (
        <div className={styles.btnContainer}>
          {/* PREV */}
          <div className={styles.btnWrap}>
            <span>Prev</span>
            <Link
              className={styles.btn}
              to={`/category/${categoryId}/${
                activeIndex === 1 ? data.length : activeIndex - 1
              }`}
            >
              <span className={styles.iconWrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* flip card */}
          <div className={styles.btnWrap}>
            <span> {activeFront ? "Answer" : "Question"}</span>
            <button
              className={styles.btn}
              onClick={() => setActiveFront(!activeFront)}
            >
              <span className={styles.iconWrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* next */}
          <div className={styles.btnWrap}>
            <span>Next</span>
            <Link
              className={styles.btn}
              to={`/category/${categoryId}/${
                activeIndex === data.length ? 1 : activeIndex + 1
              }`}
            >
              <span className={styles.iconWrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CardMain;
