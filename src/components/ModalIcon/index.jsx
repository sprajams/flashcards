import { HiOutlineInformationCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const Modal = ({ handleOnclick }) => {
  return (
    <div className={styles.wrap}>
      <motion.button
        onClick={handleOnclick}
        className={styles.btnIcon}
        whileHover={{ scale: 1.2 }}
      >
        <HiOutlineInformationCircle className={styles.icon} />
      </motion.button>
    </div>
  );
};

export default Modal;
