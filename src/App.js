import { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import ProductCardList from "./components/productCardList/ProductCardList";
import ShopSettings from "./components/shopSettings/ShopSettings";

function App() {
  const [activeFilter, setActiveFilter] = useState();
  return (
    <div className="cont">
      <ShopSettings
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ProductCardList activeFilter={activeFilter} />
      <Cart />
    </div>
  );
}

export default App;
