const baseUrl = 'https://api.escuelajs.co/api/v1/'
export const api = {
   getCategories: ()=>{
      return fetch(baseUrl + 'categories')
   },
   getProducts: ()=>{
      return fetch(baseUrl + 'products')
   },
   getProductsByCategory: (categoryId)=>{
      return fetch(baseUrl + `/products/?categoryId=${categoryId}`)
   }
}