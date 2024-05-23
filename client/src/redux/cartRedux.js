//selectors
export const getAllDeliveryForms = (state => state.deliveryForms);

// actions
// const createActionName = actionName => `app/cart/${actionName}`;

// action creators
const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default cartReducer;