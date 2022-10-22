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
          <Link to="/card"> Category 1: AMERICAN GOVERNMENT</Link>
        </button>
      </li>
      {/* questions 58-87 */}
      <li>
        <button onClick={() => handleSelection(57, 86)}>
          Category 2: AMERICAN HISTORY
        </button>
      </li>
      {/* questions: 88-100 */}
      <li>
        <button onClick={() => handleSelection(87, 99)}>
          Category 3: OTHER
        </button>
      </li>
      <li>
        <button onClick={() => handleSelection(0, 99)}>All</button>
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
