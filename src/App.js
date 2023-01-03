import StudyMode from "./pages/StudyMode";
import Homepage from "./pages/Homepage";
import { Routes, Route, useHref } from "react-router-dom";
import Category from "./pages/Category";
import Bookmark from "./pages/Bookmark";
import BackLink from "./components/BackLink";
import ModalIcon from "./components/ModalIcon";
import QuizMode from "./pages/QuizMode";
import Results from "./pages/Results";
import ReviewMode from "./pages/ReviewMode";
import { useState } from "react";
import ModalOverlay from "./components/ModalOverlay";
import { SpeechProvider } from "./contexts/SpeechContext";
import "./App.scss";
import BookmarkMode from "./pages/BookmarkMode";

function App() {
  const routeKey = useHref(); //return the current URL which changes on navigation
  const isHome = routeKey === "/"; // true when in root

  const [isOpen, setIsOpen] = useState(false);
  const handleOnclick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SpeechProvider>
      <div className="outer">
        <div className="inner">
          <div className="navbar">
            {isHome ? (
              <ModalIcon handleOnclick={handleOnclick} />
            ) : (
              <BackLink />
            )}
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              {/* routing of different categories */}
              <Route path="category">
                <Route path=":categoryId" element={<Category />} />
                <Route
                  path=":categoryId/:cardIndex"
                  element={<StudyMode key={routeKey} />}
                />
                <Route
                  path=":categoryId/quiz"
                  element={<QuizMode key={routeKey} />}
                />
              </Route>
              {/* practice quiz */}
              <Route path="quiz" element={<QuizMode key={routeKey} />} />

              {/* results page */}
              <Route path="result" element={<Results />} />
              <Route path="result/:cardIndex" element={<ReviewMode />} />

              {/* access all questions bookmarked */}
              <Route path="bookmark" element={<Bookmark />} />

              <Route
                path="bookmark/:cardIndex"
                element={<BookmarkMode key={routeKey} />}
              />
            </Routes>
            <ModalOverlay isOpen={isOpen} handleOnclick={handleOnclick} />
          </div>
        </div>
      </div>
    </SpeechProvider>
  );
}

export default App;
