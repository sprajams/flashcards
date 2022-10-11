import { useState } from "react";
import qData from "./assets/output.json";
import FrontCard from "./components/FrontCard";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const sample = [];

  for (let i = 0; i < 10; i++) {
    sample.push(<div>{qData.questions[i].question}</div>);
  }

  return (
    <div className="outer">
      <div className="inner">
        <div className="contentContainer">
          <FrontCard
            data={qData.questions[activeIndex].question}
            index={activeIndex}
          />
        </div>
        <div className="btnContainer">
          <button onClick={() => setActiveIndex(activeIndex - 1)}>Prev</button>
          <button onClick={() => setActiveIndex(activeIndex + 1)}>Next</button>

          {revealAnswer ? (
            <div>{qData.questions[activeIndex].options}</div>
          ) : null}
          <button onClick={() => setRevealAnswer(!revealAnswer)}>Answer</button>
        </div>
      </div>
    </div>
  );
}

export default App;
