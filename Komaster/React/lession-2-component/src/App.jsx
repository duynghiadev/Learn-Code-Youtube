import Review from "../components/Review";
import { reviews } from "../data";
function App() {
  const data1 = reviews[0];
  const data2 = reviews[1];
  return (
    <div className="container">
      <Review {...data1} />
      {/* <Review {...data2} /> */}
    </div>
  );
}

export default App;
