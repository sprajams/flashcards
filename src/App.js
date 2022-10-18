import { useState } from "react";
import qData from "./assets/output.json";
import Card from "./components/CardLayout";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFront, setActiveFront] = useState(true);

  const handleNext = () => {
    setActiveFront(true);
    if (activeIndex < 99) {
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

  const handleRefresh = () => {
    setActiveFront(true);
    setActiveIndex(0);
  };

  const handleRandom = () => {
    setActiveFront(true);
    setActiveIndex(Math.floor(Math.random() * 99));
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
          <div className="btnBottom">
            <button className="btn" onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 icon"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Prev</span>
            </button>

            <button className="btn" onClick={handleNext}>
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 icon"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="btnTop">
            <button className="btn btn--small" onClick={handleRefresh}>
              {/* refresh button */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 icon"
              >
                <path
                  fillRule="evenodd"
                  d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              className="btn"
              onClick={() => setActiveFront(!activeFront)}
            >
              {activeFront ? "Answer" : "Question"}
            </button>
            <button className="btn btn--small" onClick={handleRandom}>
              Random
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
