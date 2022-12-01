import StudyMode from "./pages/StudyMode";
import Homepage from "./pages/Homepage";
import { Routes, Route, useHref } from "react-router-dom";
import Category from "./pages/Category";
import Bookmark from "./pages/Bookmark";
import BackLink from "./components/BackLink";
import QuizMode from "./pages/QuizMode";
import Results from "./pages/Results";
import ReviewMode from "./pages/ReviewMode";

import "./App.scss";

function App() {
  const routeKey = useHref(); //return the current URL which changes on navigation
  const isHome = routeKey === "/"; // true when in root
  return (
    <div className="outer">
      <div className="inner">
        <div className="navbar">{isHome ? null : <BackLink />}</div>
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
              element={<StudyMode key={routeKey} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
