import {
  ADD_SHOP_CART,
} from '../constant';

export const addShopCart = (data) => {
  return {
    type: ADD_SHOP_CART,
    data,
  };
};
