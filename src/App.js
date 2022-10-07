import qData from "./data.json";
import "./App.css";

function App() {
  const sample = [];
  for (let i = 0; i < 10; i++) {
    sample.push(<div>{qData.questions[i].question}</div>);
  }
  return <div className="App">{sample}</div>;
}

export default App;
