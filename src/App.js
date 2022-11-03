import CardMain from "./components/CardMain";
import Homepage from "./components/Homepage";
import { Routes, Route, useHref } from "react-router-dom";
import Category from "./components/Category";
import Bookmark from "./components/Bookmark";
import BackLink from "./components/BackLink";
import "./App.scss";

function App() {
  const routeKey = useHref(); //return the current URL which changes on navigation

  return (
    <div className="outer">
      <div className="inner">
        <BackLink />
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="category">
              <Route path=":categoryId" element={<Category />} />
              <Route
                path=":categoryId/:cardIndex"
                element={<CardMain key={routeKey} />}
              />
            </Route>
            <Route path="bookmark" element={<Bookmark />} />
            <Route
              path="bookmark/:cardIndex"
              element={<CardMain key={routeKey} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
