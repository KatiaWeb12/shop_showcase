import ProductsFiltres from '../productsFiltres/ProductsFiltres'
import './ShopSettings.css'

export default function ShopSettings(){
    return(
      <div className='header'>
         <input type="text" />
         <ProductsFiltres/>
      </div>
    )
}