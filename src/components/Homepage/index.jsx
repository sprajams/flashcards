import { Link } from "react-router-dom";

const Homepage = ({ setDataBreakpoint }) => {
  const handleSelection = (start, end) => {
    setDataBreakpoint(() => {
      return { start: start, end: end };
    });
  };
  const randomStartNum = () => {
    Math.floor(Math.random() * 99);
  };

  return (
    <ul>
      {/* questions 1-57 */}
      <li>
        <button onClick={() => handleSelection(0, 56)}>
          <Link to="/category/1"> Category 1: AMERICAN GOVERNMENT</Link>
        </button>
      </li>
      {/* questions 58-87 */}
      <li>
        <button onClick={() => handleSelection(57, 86)}>
          <Link to="/category/2"> Category 2: AMERICAN HISTORY</Link>
        </button>
      </li>
      {/* questions: 88-100 */}
      <li>
        <button onClick={() => handleSelection(87, 99)}>
          <Link to="/category/3"> Category 3: OTHER</Link>
        </button>
      </li>
      <li>
        <button onClick={() => handleSelection(0, 99)}>
          <Link to="/category/all">All</Link>
        </button>
      </li>
      <li>
        {/* TODO: randomize 10 questions */}
        <button onClick={() => handleSelection(randomStartNum, 10)}>
          Practice Test
        </button>
      </li>
      <li>
        <button>Bookmark</button>
      </li>
    </ul>
  );
};

export default Homepage;