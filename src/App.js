import './App.css';
import ProductCardList from './components/productCardList/ProductCardList';
import ShopSettings from './components/shopSettings/ShopSettings';

function App() {
  return(
    <div className='cont'>
      <ShopSettings/>
      <ProductCardList/>
    </div>
  )
}

export default App;
