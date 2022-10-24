import { useState } from "react";
import qData from "./assets/output.json";
import CardMain from "./components/CardMain";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
// import { useSelector } from "react-redux";
import "./App.css";

function App() {
  //   const bookmarks = useSelector((state) => state.bookmarks);
  // console.log(bookmarks)
  const [dataBreakpoint, setDataBreakpoint] = useState({ start: 0, end: 10 });

  const dataSlice = qData.questions.slice(
    dataBreakpoint.start,
    dataBreakpoint.end + 1
  );

  return (
    <div className="outer">
      <div className="inner">
        <Routes>
          <Route
            path="/"
            element={<Homepage setDataBreakpoint={setDataBreakpoint} />}
          />
          <Route path="category">
            <Route path=":categoryId" element={<Category data={dataSlice} />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
