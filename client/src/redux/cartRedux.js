import initialState from "./initialState";

//selectors
export const getAllCartProducts = (({ cart }) => cart.products);
export const getProductsNumber = ({ cart }) => cart.products.length;
export const getTotalQuantity = ({ cart }) => cart.products.reduce((sum, product) => sum + product.quantity, 0);
export const getAllDeliveryForms = ({ products }) => products.deliveryForms;
export const getComments = ({ cart }) =>
  cart.products
    .map((product) =>
      product.comment ? product.name + ': ' + product.comment : '',
    )
    .toString();
export const getAllProductsPrice = ({ cart }) =>
  cart.products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

// actions
const createActionName = actionName => `app/cart/${actionName}`;
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const REMOVE_ALL_PRODUCTS = createActionName('REMOVE_ALL_PRODUCTS');
const CHANGE_QUANTITY = createActionName('CHANGE_QUANTITY');
const ADD_COMMENT = createActionName('ADD_COMMENT');

// action creators
export const addProduct = (payload) => ({ payload, type: ADD_PRODUCT });
export const removeProduct = (payload) => ({ payload, type: REMOVE_PRODUCT });
export const removeAllProducts = (payload) => ({ payload, type: REMOVE_ALL_PRODUCTS });
export const changeQuantity = (payload) => ({ payload, type: CHANGE_QUANTITY });
export const addComment = (payload) => ({ payload, type: ADD_COMMENT });

const cartReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter((product) => product.id !== action.payload,
        ),
      };
    }
    case REMOVE_ALL_PRODUCTS: {
      return {
        ...statePart,
        products: [],
      }
    }
    case CHANGE_QUANTITY: {
      return {
        ...statePart,
        products: statePart.products.map((product) => product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product,
        ),
      }
    }
    case ADD_COMMENT: {
      return {
        ...statePart,
        products: statePart.products.map((product) => product.id === action.payload.id
          ? { ...product, comment: action.payload.comment }
          : product,
        ),
      }
    }
    default:
      return statePart;
  };
};

export default cartReducer;