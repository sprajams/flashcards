import { HiOutlineXCircle } from "react-icons/hi";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const ModalOverlay = ({ isOpen, handleOnclick }) => {
  const modalVariant = {
    opened: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0.5 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.wrap}
          variants={modalVariant}
          key="modal"
          initial="closed"
          animate={"opened"}
          exit={"closed"}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className={styles.modalOuter} onClick={handleOnclick}></div>
          <div
            className={clsx(
              isOpen ? styles.modalOpen : styles.modalClose,
              styles.modalInner
            )}
          >
            <motion.button
              className={styles.closeIcon}
              onClick={handleOnclick}
              whileHover={{ scale: 1.2 }}
            >
              <HiOutlineXCircle className={styles.icon} />
            </motion.button>
            <h2>Happy studying!</h2>
            <h3>Currently learning: Civics Test</h3>
            <p>
              This app is a study aid as part of your journey towards
              citizenship! 🇺🇸 <br /> Test bank of 100 questions. <br />
              You must answer 6 questions correctly out of 10 random questions
              to pass.
            </p>
            <h5>Some answers are tailored towards California residents 🐻</h5>
            <h6>Last updated: 2022</h6>
            <small>
              Disclaimer: check your area's latest website(s) for the most up to
              the date info.
            </small>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalOverlay;
