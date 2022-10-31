import BackLink from "../BackLink";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import output from "../../assets/output.json";

const Bookmark = () => {
  const bookmarks = useSelector((state) => state.bookmarks);

  return (
    <div>
      <BackLink />
      <h1>BOOKMARK</h1>
      {bookmarks.length > 0 ? (
        <ul>
          <h4>questioned numbers bookmarked</h4>
          {bookmarks.map((elem, i) => {
            const targetObj = output.questions.find(
              (element) => element.id === elem
            );
            return (
              <li key={i}>
                <Link to={`${targetObj.id}`}>{targetObj.question}</Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Bookmark;
