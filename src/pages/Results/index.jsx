import { useSelector } from "react-redux";

const Results = () => {
  const quiz = useSelector((state) => state.quiz);
  // turn stats object into [[key,value], [id, true]]
  const statsEntries = Object.entries(quiz.stats);
  //   sort ids into correct vs incorrect arrays
  //   { correct: [id,...], incorrect: [id,...]}
  const results = statsEntries.reduce(
    (acc, curr) => {
      const [id, isCorrect] = curr;
      if (isCorrect) {
        acc.correct.push(id);
      } else {
        acc.incorrect.push(id);
      }
      return acc;
    },
    { correct: [], incorrect: [] }
  );

  const numCorrect = results.correct.length;

  const resultStatus = numCorrect >= 6;

  return (
    <div>
      <h2>Final Score</h2>
      <div>
        {resultStatus ? <h3>YAY</h3> : <h3>oh no</h3>}
        <h4>{numCorrect} / 10</h4>
        <button>retry</button>
      </div>
    </div>
  );
};

export default Results;
