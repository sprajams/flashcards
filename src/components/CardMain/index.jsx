import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardLayout from "../CardLayout";
import groups from "../../assets/grouped";
import styles from "./styles.module.scss";

const CardMain = () => {
  const { categoryId, cardIndex } = useParams();
  const data = groups[categoryId].data ?? []; //
  const activeIndex = parseInt(cardIndex, 10);
  const adjustedIndex = activeIndex - 1;

  const [activeFront, setActiveFront] = useState(true);

  return (
    <div className={styles.cardWrap}>
      <Link to="/">back</Link>
      <>
        <div className={styles.contentContainer}>
          <CardLayout
            question={data[adjustedIndex].question}
            options={data[adjustedIndex].options}
            index={adjustedIndex}
            totalQ={data.length}
            activeFront={activeFront}
            setActiveFront={setActiveFront}
          />
        </div>
        <div className={styles.btnContainer}></div>
        <div className={styles.btnBottom}>
          <Link
            className={styles.btn}
            to={`/category/${categoryId}/${
              activeIndex === 1 ? data.length : activeIndex - 1
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 icon"
            >
              <path
                fillRule="evenodd"
                d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                clipRule="evenodd"
              />
            </svg>
            <span>Prev</span>
          </Link>
          <Link
            className={styles.btn}
            to={`/category/${categoryId}/${
              activeIndex === data.length ? 1 : activeIndex + 1
            }`}
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 icon"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className={styles.btnTop}>
          <Link className={styles.btn} to={`/category/${categoryId}/1`}>
            {/* refresh button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 icon"
            >
              <path
                fillRule="evenodd"
                d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <button
            className={styles.btn}
            onClick={() => setActiveFront(!activeFront)}
          >
            {activeFront ? "Answer" : "Question"}
          </button>
          <Link
            className={styles.btn}
            to={`/category/${categoryId}/${Math.floor(
              Math.random() * data.length + 1
            )}`}
          >
            Random
          </Link>
        </div>
      </>
    </div>
  );
};

export default CardMain;
