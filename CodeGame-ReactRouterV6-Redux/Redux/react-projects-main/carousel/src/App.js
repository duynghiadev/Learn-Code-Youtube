import Card from "./Card";
import PlaneCarousel from "./carousel/PlaneCarousel";
import Tailwindcarousel from "./carousel/Tailwindcarousel";
import { images } from "./constants";

function App() {
  return (
    <Tailwindcarousel images={images} />

    // <PlaneCarousel shownAtOnce={4}>
    //   <Card bgColor="red" text="card-1" />
    //   <Card bgColor="pink" text="card-2" />
    //   <Card bgColor="green" text="card-3" />
    //   <Card bgColor="black" text="card-4" />
    //   <Card bgColor="orange" text="card-5" />
    //   <Card bgColor="violet" text="card-6" />
    //   <Card bgColor="blue" text="card-7" />
    //   <Card bgColor="orchid" text="card-8" />
    //   <Card bgColor="purple" text="card-9" />
    // </PlaneCarousel>
  );
}

export default App;
