import { useState } from "react";
import qData from "./assets/output.json";
import Card from "./components/CardLayout";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFront, setActiveFront] = useState(true);
  const handleNext = () => {
    setActiveFront(true);
    if (activeIndex < 100) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };
  const handlePrev = () => {
    setActiveFront(true);
    if (activeIndex === 0) {
      setActiveIndex(99);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <div className="outer">
      <div className="inner">
        <div className="contentContainer">
          <Card
            question={qData.questions[activeIndex].question}
            options={qData.questions[activeIndex].options}
            index={activeIndex}
            activeFront={activeFront}
            setActiveFront={setActiveFront}
          />
        </div>
        <div className="btnContainer">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={() => setActiveFront(!activeFront)}>Answer</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
