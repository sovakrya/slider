import "./App.css";
import Slider from "./components/Slider";
import sliders from "./sliders.json";

export type SlideItem = {
  img: string;
  text: string;
};

function App() {
  const slides: SlideItem[] = sliders;
  let loop = true;
  let navs = true;
  let pags = true;
  let auto = false;
  let stopMauseHover = true;
  let delay = 0;

  return (
    <div className="App">
      <Slider
        slides={slides}
        loop={loop}
        navs={navs}
        pags={pags}
        auto={auto}
        delay={delay}
        stopMouseHover={stopMauseHover}
      />
    </div>
  );
}

export default App;
