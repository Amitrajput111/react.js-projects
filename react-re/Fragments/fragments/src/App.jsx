import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  return (
    <>
      <h1>Healthy Food </h1>
      <ErrorMessage items={foodItems}> </ErrorMessage>
      <FoodItems items={foodItems}> </FoodItems>
    </>
  );
}
export default App;
