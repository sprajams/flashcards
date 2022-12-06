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
        <p>
          This app is a study aid as part of your journey towards citizenship!
          🇺🇸 <br /> Test bank of 100 questions. <br />
          You must answer 6 questions correctly out of 10 random questions to
          pass.
        </p>
        <h5>Some answers are tailored towards California residents 🐻</h5>
        <h6>Last updated: 2022</h6>
        <small>
          Disclaimer: check your area's latest website(s) for the most up to the
          date info.
        </small>
      </div>
    </div>
  );
};

export default ModalOverlay;
