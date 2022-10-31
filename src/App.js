import CardMain from "./components/CardMain";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import Bookmark from "./components/Bookmark";
import "./App.css";

function App() {
  return (
    <div className="outer">
      <div className="inner">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="category">
            <Route path=":categoryId" element={<Category />} />
            <Route path=":categoryId/:cardIndex" element={<CardMain />} />
          </Route>
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="bookmark/:cardIndex" element={<CardMain />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
