import ProductSearch from "../productSearch/ProductSearch";
import ProductsFiltres from "../productsFiltres/ProductsFiltres";
import "./ShopSettings.css";

export default function ShopSettings(props) {
  return (
    <div className="header">
      <div className="header_content">
      <ProductSearch />
      <ProductsFiltres {...props} />
      </div>
    </div>
  );
}
