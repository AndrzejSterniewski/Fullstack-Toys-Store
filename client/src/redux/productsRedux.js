import { API_URL } from "../config";

//selectors
export const getAllProducts = (state => state.products);
export const getProductById = ({ products }, productId) => 
  products.find(product => product.id === productId);

// actions
const createActionName = actionName => `app/products/${actionName}`;
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

// action creators
export const loadProducts = payload => ({ type: LOAD_PRODUCTS, payload });

export const loadProductsRequest = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/api/products`);
      const data = await response.json();
      console.log(data);
      dispatch(loadProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];
      default:
        return statePart;
  };
};

export default productsReducer;