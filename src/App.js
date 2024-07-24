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
import LightDarkMode from "./components/lightDarkMode";
import ScrollIndicator from "./components/scrollIndicator";

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
      {/** Light/dark mode with regular css */}
      <LightDarkMode />
      {/** scroll indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
