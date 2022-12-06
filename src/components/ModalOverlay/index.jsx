import { HiOutlineXCircle } from "react-icons/hi";
import clsx from "clsx";
import styles from "./styles.module.scss";

const ModalOverlay = ({ isOpen, handleOnclick }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.modalOuter} onClick={handleOnclick}></div>
      <div
        className={clsx(
          isOpen ? styles.modalOpen : styles.modalClose,
          styles.modalInner
        )}
      >
        <button className={styles.closeIcon} onClick={handleOnclick}>
          <HiOutlineXCircle className={styles.icon} />
        </button>
        <h2>Happy studying!</h2>
        <h3>Currently learning: Civics Test</h3>
        <h4>Answers taylored towards California residents</h4>
        <h5>Last updated: 2022</h5>
        <p>
          Test bank of 100 questions. You may be asked any 10 random questions
          and you must answer 6 correctly. This app is a study aid to help you
          on your journey to citizenship.
        </p>
        <small>
          Disclaimer: check your area's latest website for the most up to the
          date info
        </small>
      </div>
    </div>
  );
};

export default ModalOverlay;
