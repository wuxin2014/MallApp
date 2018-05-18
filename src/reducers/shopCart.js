import {
  ADD_SHOP_CART,
} from '../constant';

const shopCart = (state = [], action) => {
  switch (action.type) {
    case ADD_SHOP_CART:
      return [
        ...state,
        {
          name: action.data.name,
          id: action.data.id,
          price: action.data.price,
          num: action.data.num,
        }
      ];
    default:
      return state;
  }
};

export default shopCart;
