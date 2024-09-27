import './App.css';
import Slider from './components/Slider';
import sliders from "./sliders.json"

export type SlideItem = {
  img: string;
  text: string;
};

function App() {
  const slides: SlideItem[] = sliders


  return (
    <div className="App">
      <Slider slides={slides}/>
    </div>
  );
}

export default App;
