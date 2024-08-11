// const baseUrl = 'https://api.escuelajs.co/api/v1/'
// export const api = {
//    getCategories: ()=>{
//       return fetch(baseUrl + 'categories')
//    },
//    getProducts: ()=>{
//       return fetch(baseUrl + 'products')
//    },
//    getProductsByCategory: (categoryId)=>{
//       return fetch(baseUrl + `/products/?categoryId=${categoryId}`)
//    }
// }

const baseUrl = "https://fakestoreapi.com/";
export const api = {
  getCategories: () => {
    return fetch(baseUrl + "products/categories");
  },
  getProducts: () => {
    return fetch(baseUrl + "products");
  },
  getProductsByCategory: (category) => {
    return fetch(baseUrl + `products/category/${category}`);
  },
};
