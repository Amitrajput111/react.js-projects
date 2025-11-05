import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";

function App() {
  //let foodItems = {};

  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  return (
    <>
      <div>
        <h1>Healthy Food </h1>
        {foodItems.length === 0 && <h3> I am still hungrry</h3>}
        <FoodItems />
      </div>
    </>
  );
}
export default App;
