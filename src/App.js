import { useState } from "react";
import qData from "./assets/output.json";
import CardMain from "./components/CardMain";
import Homepage from "./components/Homepage";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const bookmarks = useSelector((state) => state.bookmarks);
  console.log(bookmarks);

  const [start, setStart] = useState(false);
  const [dataBreakpoint, setDataBreakpoint] = useState({ start: 0, end: 10 });

  const dataSlice = qData.questions.slice(
    dataBreakpoint.start,
    dataBreakpoint.end + 1
  );
  return (
    <div className="outer">
      <div className="inner">
        {start ? (
          <CardMain setStart={setStart} data={dataSlice} />
        ) : (
          <Homepage setStart={setStart} setDataBreakpoint={setDataBreakpoint} />
        )}
      </div>
    </div>
  );
}

export default App;
