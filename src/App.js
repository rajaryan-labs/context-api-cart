import "./App.css";
import Cart from "./components/Cart";
import Item from "./components/Item";


function App() {
  return (
    <div className="App">
      {/* Demo inventory items */}
      <Item name="Macbook Pro" price={100000} />
      <Item name="Pendrive" price={4000} />
      <Item name="Galaxy Fold 2" price={140000} />
      <hr />
      {/* Shared cart view */}
      <Cart/>
    </div>
  );
}

export default App;
