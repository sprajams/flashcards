import { HiOutlineInformationCircle } from "react-icons/hi";
import styles from "./styles.module.scss";

const Modal = ({ handleOnclick }) => {
  return (
    <div className={styles.wrap}>
      <button onClick={handleOnclick} className={styles.btnIcon}>
        <HiOutlineInformationCircle className={styles.icon} />
      </button>
    </div>
  );
};

export default Modal;
