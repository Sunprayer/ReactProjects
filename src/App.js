import "./App.css";
import Accordion from "./components/accordion";
import LoadMoreButton from "./components/loadMore";
import RandomColor from "./components/randomColor";
import ImageSlider from "./components/slider";
import StarRating from "./components/stars";
import SideMenu from "./components/menuView";
import menus from "./components/menuView/data";
import QRCodeGenerator from "./components/codeGenerator";
import Count from "./components/count";

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
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      {/** Load more button */}
      {/** <LoadMoreButton /> */}
      {/** Side menu */}
      <SideMenu menus={menus} />
      {/** QR code generator */}
      <QRCodeGenerator />
      {/** Count */}
      <Count />
    </div>
  );
}

export default App;
