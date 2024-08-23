import ProductSearch from "../productSearch/ProductSearch";
import ProductsFiltres from "../productsFiltres/ProductsFiltres";
import "./ShopSettings.css";

export default function ShopSettings(props) {
  return (
    <div className="header">
      <ProductSearch />
      <ProductsFiltres {...props} />
    </div>
  );
}
