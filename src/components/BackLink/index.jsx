import { useHref, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { HiChevronLeft } from "react-icons/hi";

const BackLink = () => {
  let href = useHref();
  let navigate = useNavigate();
  let tempArr = "";
  const handleBack = () => {
    tempArr = href.split("/");
    let prev = tempArr.pop();
    if (tempArr[tempArr.length - 1] === "category") {
      tempArr = "/";
    } else if (prev === "result") {
      tempArr = "/quiz";
    } else {
      tempArr = tempArr.join("/");
    }
    return navigate(tempArr);
  };

  return (
    //TODO: is there a better method than hardcoding?
    <button type="button" className={styles.backLink} onClick={handleBack}>
      <span className={styles.iconWrap}>
        <HiChevronLeft />
      </span>
      <span>back</span>
    </button>
  );
};

export default BackLink;
