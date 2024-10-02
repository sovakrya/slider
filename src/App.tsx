import "./App.css";
import Slider from "./components/Slider";
import sliders from "./sliders.json";

export type SlideItem = {
  id: number;
  img: string;
  text: string;
};

function App() {
  const slides: SlideItem[] = sliders;
  let loop = true;
  let navs = true;
  let pages = true;
  let auto = true;
  let stopMouseHover = true;
  let delay = 2;

  return (
    <div className="App">
      <Slider
        slides={slides}
        loop={loop}
        navs={navs}
        pages={pages}
        auto={auto}
        delay={delay}
        stopMouseHover={stopMouseHover}
      />
    </div>
  );
}

export default App;
