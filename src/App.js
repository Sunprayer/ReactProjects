import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/randomColor";
import StarRating from "./components/stars";

function App() {
  return (
    <div className="App">
      {/** Accordion component */}
      <Accordion />
      {/** Color randomizer */}
      <RandomColor />
      {/** Star rating system */}
      <StarRating numberOfStars={5} />
    </div>
  );
}

export default App;
