import { useHref, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const BackLink = () => {
  let href = useHref();
  let navigate = useNavigate();
  let tempArr = "";
  const handleBack = () => {
    tempArr = href.split("/");
    tempArr.pop();
    if (tempArr[tempArr.length - 1] === "category") {
      tempArr = "/";
    } else {
      tempArr = tempArr.join("/");
    }
    return navigate(tempArr);
  };
  return (
    //TODO: is there a better method than hardcoding?
    <button className={styles.backLink} onClick={handleBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 icon"
      >
        <path
          fillRule="evenodd"
          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
          clipRule="evenodd"
        />
      </svg>
      <span>back</span>
    </button>
  );
};

export default BackLink;
