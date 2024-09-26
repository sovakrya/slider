type Slide = {
  img: string;
  text: string;
};
type PropsSlider = {
  slides: Slide[];
  loop: boolean;
  navs: boolean;
  pages: boolean;
  auto: () => void;
  stopMouseHover: () => void;
  delay: number;
};

export default function Slider(props: PropsSlider) {
  return <div>
    
  </div>
}
