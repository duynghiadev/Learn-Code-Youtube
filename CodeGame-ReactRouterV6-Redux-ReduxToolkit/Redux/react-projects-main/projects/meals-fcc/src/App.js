import MealSearch from "./components/MealSearch";
import MealsList from "./components/MealsList";
import Modal from "./components/Modal";
import { useGlobalContext } from "./context/app-context";

function App() {
  const { modalProperties } = useGlobalContext();

  return (
    <div>
      <MealSearch />
      <MealsList />
      {modalProperties.isOpen && <Modal />}
    </div>
  );
}

export default App;
