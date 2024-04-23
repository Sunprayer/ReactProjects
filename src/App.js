import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/randomColor";
import ImageSlider from "./components/slider";
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
      {/**Image slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
}

export default App;
