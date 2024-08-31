import { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import ProductCardList from "./components/productCardList/ProductCardList";
import ShopSettings from "./components/shopSettings/ShopSettings";
import StoreProvider from "./providers/StoreProvider";

function App() {
  const [activeFilter, setActiveFilter] = useState();
  return (
    <StoreProvider>
      <div className="cont">
        <ShopSettings
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <ProductCardList activeFilter={activeFilter} />
        <Cart />
      </div>
    </StoreProvider>
  );
}

export default App;
