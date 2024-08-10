import ProductsFiltres from '../productsFiltres/ProductsFiltres'
import './ShopSettings.css'

export default function ShopSettings(props){
    return(
      <div className='header'>
         <input type="text" />
         <ProductsFiltres {...props}/>
      </div>
    )
}