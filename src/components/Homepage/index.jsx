import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <ul>
      {/* questions 1-57 */}
      <li>
        <Link to="/category/1"> Category 1: AMERICAN GOVERNMENT</Link>
      </li>
      {/* questions 58-87 */}
      <li>
        <Link to="/category/2"> Category 2: AMERICAN HISTORY</Link>
      </li>
      {/* questions: 88-100 */}
      <li>
        <Link to="/category/3"> Category 3: OTHER</Link>
      </li>
      <li>
        <Link to="/category/all">All</Link>
      </li>
      <li>
        {/* TODO: randomize 10 questions */}
        Practice Test
      </li>
      <li>
        <Link to="/bookmark">Bookmark</Link>
      </li>
    </ul>
  );
};

export default Homepage;
